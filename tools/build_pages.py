"""Build dist/: the published site, with one real web address per page.

site/index.html stays the single source. For every page (home, /careers/, /small-repairs/ …) this writes a copy
whose visible HTML holds only that page; the other pages are packed into JSON blocks and unpacked by a small
script before the site's own code runs, so navigation inside the site keeps working without reloads.

Run:  python tools/build_pages.py      (tools/publish.py runs it for you)
"""
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
starts = [(m.start(), m.group(1)) for m in re.finditer(r'<div class="page-view[^"]*" id="page-([a-z]+)">', src)]
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



def build(page):
    path, title, desc = PAGES[page]
    out = []
    pos = 0
    packed = {}
    for name, s, e, open_tag, inner, tail in blocks:
        out.append(src[pos:s])
        tag = re.sub(r'class="page-view( active)?"', 'class="page-view active"' if name == page else 'class="page-view"', open_tag)
        if name == page:
            out.append(tag + inner + tail)
        else:
            out.append(tag + tail)
            packed[name] = inner
        pos = e
    html = "".join(out) + src[pos:]

    payload = json.dumps(packed, ensure_ascii=False).replace("</", "<\\/")
    unpack = ('<script type="application/json" id="packed-pages">' + payload + '</script>\n'
              '<script>(function(){var d=JSON.parse(document.getElementById("packed-pages").textContent);'
              'for(var k in d){var el=document.getElementById("page-"+k);if(el&&!el.childElementCount)el.innerHTML=d[k];}})();</script>\n')
    i = html.index("<script>\nlet currentLang")
    html = html[:i] + unpack + html[i:]

    url = DOMAIN + path
    head = (f'<base href="/">\n' if path != "/" else "")
    head += f'<link rel="canonical" href="{url}">\n<meta property="og:url" content="{url}">\n'
    html = html.replace("<head>", "<head>\n" + head, 1) if "<head>\n" in html else html
    html = re.sub(r"<title>.*?</title>", f"<title>{escape(title)}</title>", html, count=1, flags=re.S)
    html = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{escape(desc)}">', html, count=1)
    if page != "home":
        html = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{escape(title)}">', html, count=1)
        html = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{escape(desc)}">', html, count=1)
    html = html.replace('<meta property="og:image" content="img/', f'<meta property="og:image" content="{DOMAIN}/img/')
    return html


DIST.mkdir(exist_ok=True)
for child in DIST.iterdir():
    shutil.rmtree(child) if child.is_dir() else child.unlink()
shutil.copytree(SITE, DIST, dirs_exist_ok=True)
for page, (path, _, _) in PAGES.items():
    target = DIST / path.strip("/") / "index.html" if path != "/" else DIST / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(build(page), encoding="utf-8")

(DIST / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    "".join(f"  <url><loc>{DOMAIN}{p}</loc></url>\n" for p, _, _ in PAGES.values()) + "</urlset>\n", encoding="utf-8")
print("dist/ built:", ", ".join(p for p, _, _ in PAGES.values()))
