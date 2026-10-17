"""Build dist/: the published site, with one real web address per page.

site/index.html stays the single source. For every page (home, /careers/, /small-repairs/ …) this writes a copy
whose HTML holds only that page; the other pages load from one shared file, /pages.js, before the site's own
code runs, so navigation inside the site keeps working without reloads.

Run:  python tools/build_pages.py      (tools/publish.py runs it for you)
"""
import hashlib
import json
import re
import shutil
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
DIST = ROOT / "dist"
DOMAIN = "https://bts-grupo.com"

PAGES = {
    "home": ("/", "BTS — Building The Solution",
             "Construction and Renovation for Real Estate Owners in Northern Portugal — Aveiro, Porto, Douro Valley"),
    "works": ("/services/", "Construction & Renovation Services — BTS",
              "New builds, renovations, restoration, masonry, roofs and pools in Northern Portugal. Cost calculator and FAQ."),
    "resolve": ("/small-repairs/", "BTS Resolve — Small Repairs — BTS",
                "Something broken at home? Send a photo on WhatsApp. We tell you the price before any work starts. Douro Valley, Aveiro, Porto."),
    "careers": ("/careers/", "Careers — Construction Jobs in Northern Portugal — BTS",
                "Open positions at BTS: drywall / pladur installers, stonemasons and formwork carpenters in Northern Portugal."),
    "services": ("/property-care/", "HomeCare Property Care Plans — BTS",
                 "HomeCare plans for owners who are often away: inspections, maintenance and emergency response from €99/month."),
    "privacy": ("/privacy/", "Privacy Policy — BTS", "How Blame The Stars, Lda. handles your personal data."),
    "cookies": ("/cookies/", "Cookie Policy — BTS", "Cookies used on bts-grupo.com."),
    "complaints": ("/complaints/", "Complaints Book — BTS", "Livro de Reclamações and complaint information for Blame The Stars, Lda."),
}

src = (SITE / "index.html").read_text(encoding="utf-8")

# FAQ answers are normally added by JavaScript; write them into the HTML too so readers without JavaScript see them
faq_block = re.search(r"const faqData = \{\s*en: \[(.*?)\],\s*pt:", src, re.S)
if not faq_block:
    raise SystemExit("FAQ data not found in index.html")
FAQ = [(q.replace("\\'", "'"), a.replace("\\'", "'"))
       for q, a in re.findall(r"q: '((?:[^'\\]|\\.)*)', a: '((?:[^'\\]|\\.)*)'", faq_block.group(1))]
FAQ_EMPTY = '<div id="faqList" style="display:flex;flex-direction:column;gap:8px;"></div>'
if FAQ_EMPTY not in src:
    raise SystemExit("FAQ container changed in index.html — update tools/build_pages.py")
src = src.replace(FAQ_EMPTY, FAQ_EMPTY[:-6] + "".join(
    f'<details class="faq-static"><summary>{escape(q)}</summary><p>{escape(a)}</p></details>' for q, a in FAQ) + "</div>")
FAQ_LD = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in FAQ]},
    ensure_ascii=False).replace("</", "<\\/")

starts =[(m.start(), m.group(1)) for m in re.finditer(r'<div class="page-view[^"]*" id="page-([a-z]+)">', src)]
end_all = src.index("<footer")
if sorted(n for _, n in starts) != sorted(PAGES):
    raise SystemExit(f"Pages in index.html changed: {[n for _, n in starts]} — update PAGES in tools/build_pages.py")

blocks = []
for i, (s, name) in enumerate(starts):
    e = starts[i + 1][0] if i + 1 < len(starts) else end_all
    chunk = src[s:e]
    open_tag = re.match(r'<div[^>]*>', chunk).group(0)
    close = chunk.rindex("</div>")
    blocks.append((name, s, e, open_tag, chunk[len(open_tag):close], chunk[close:]))



ALL_PAGES = json.dumps({name: inner for name, _, _, _, inner, _ in blocks}, ensure_ascii=False).replace("</", "<\\/")
PAGES_JS = ("(function(){var d=" + ALL_PAGES + ";"
            "for(var k in d){var el=document.getElementById('page-'+k);if(el&&!el.childElementCount)el.innerHTML=d[k];}})();\n")
PAGES_JS_VERSION = hashlib.sha1(PAGES_JS.encode("utf-8")).hexdigest()[:10]

REDIRECTS = {"legal": "/complaints/", "cost-calculator": "/services/#calculator", "homecare": "/property-care/", "faq": "/services/#faq", "advice": "/#tips"}
SCRIPT_FILES = {}


def build(page):
    path, title, desc = PAGES[page]
    out = []
    pos = 0
    for name, s, e, open_tag, inner, tail in blocks:
        out.append(src[pos:s])
        tag = re.sub(r'class="page-view( active)?"', 'class="page-view active"' if name == page else 'class="page-view"', open_tag)
        if name == page:
            out.append(tag + inner + tail)
        else:
            out.append(tag + tail)
        pos = e
    html = "".join(out) + src[pos:]

    # The other pages come from one shared file, so each address's own code holds only its own page
    i = html.index("<script>\nlet currentLang")
    html = html[:i] + f'<script src="/pages.js?v={PAGES_JS_VERSION}"></script>\n' + html[i:]

    url = DOMAIN + path
    head = (f'<base href="/">\n' if path != "/" else "")
    head += f'<link rel="canonical" href="{url}">\n<meta property="og:url" content="{url}">\n'
    if page == "works":
        head += f'<script type="application/ld+json">{FAQ_LD}</script>\n'
    html = html.replace("<head>", "<head>\n" + head, 1) if "<head>\n" in html else html
    html = re.sub(r"<title>.*?</title>", f"<title>{escape(title)}</title>", html, count=1, flags=re.S)
    html = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{escape(desc)}">', html, count=1)
    if page != "home":
        html = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{escape(title)}">', html, count=1)
        html = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{escape(desc)}">', html, count=1)
    html = html.replace('<meta property="og:image" content="img/', f'<meta property="og:image" content="{DOMAIN}/img/')

    # Smaller styles: drop comments and extra spaces (the source file stays readable)
    def mini(m):
        css = re.sub(r"/\*.*?\*/", "", m.group(1), flags=re.S)
        css = re.sub(r"\s+", " ", css)
        css = re.sub(r"\s*([{};,])\s*", r"\1", css)
        return "<style>" + css.strip() + "</style>"
    html = re.sub(r"<style>(.*?)</style>", mini, html, flags=re.S)

    # Move the site's own scripts (translations, forms, assistant…) to shared files, in the same order
    def externalize(m):
        code = m.group(1)
        name = "js/app-" + hashlib.sha1(code.encode("utf-8")).hexdigest()[:10] + ".js"
        SCRIPT_FILES[name] = code
        return f'<script src="/{name}"></script>'
    body_at = html.index("<body")
    html = html[:body_at] + re.sub(r"<script>(.*?)</script>", externalize, html[body_at:], flags=re.S)
    return html


DIST.mkdir(exist_ok=True)
for child in DIST.iterdir():
    shutil.rmtree(child) if child.is_dir() else child.unlink()
shutil.copytree(SITE, DIST, dirs_exist_ok=True)
for page, (path, _, _) in PAGES.items():
    target = DIST / path.strip("/") / "index.html" if path != "/" else DIST / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(build(page), encoding="utf-8")
(DIST / "pages.js").write_text(PAGES_JS, encoding="utf-8")
(DIST / "js").mkdir(exist_ok=True)
for name, code in SCRIPT_FILES.items():
    (DIST / name).write_text(code, encoding="utf-8")
for slug, dest in REDIRECTS.items():
    (DIST / slug).mkdir(exist_ok=True)
    (DIST / slug / "index.html").write_text(
        f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><title>BTS</title>'
        f'<link rel="canonical" href="{DOMAIN}{dest.split("#")[0]}"><meta http-equiv="refresh" content="0; url={dest}">'
        f'<script>location.replace("{dest}");</script></head><body><a href="{dest}">BTS</a></body></html>\n', encoding="utf-8")

(DIST / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    "".join(f"  <url><loc>{DOMAIN}{p}</loc></url>\n" for p, _, _ in PAGES.values()) + "</urlset>\n", encoding="utf-8")
print("dist/ built:", ", ".join(p for p, _, _ in PAGES.values()))
