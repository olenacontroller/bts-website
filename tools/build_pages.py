"""Build dist/: the published site, with one real web address per page, in English and in Portuguese.

site/index.html stays the single source. For every page (home, /careers/, /small-repairs/ …) this writes a copy
whose HTML holds only that page; the other pages load from one shared file, /pages.js, before the site's own
code runs, so navigation inside the site keeps working without reloads.

Portuguese copies live under /pt/ (bts-grupo.com/pt/services/ …): the texts from the T dictionary in index.html are
written straight into the HTML, so Google and AI assistants read the Portuguese version without running JavaScript.

Run:  python tools/build_pages.py      (tools/publish.py runs it for you)
"""
import datetime
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
    "home": ("/", "Construction & Renovation in Northern Portugal | BTS Grupo",
             "Licensed construction and renovation company in Peso da Régua: house renovations, new builds, roofs and pools in the Douro Valley, Porto and Aveiro. Fixed written quote, English-speaking project manager."),
    "works": ("/services/", "Construction & Renovation Services — BTS Grupo",
              "New builds, house renovations, restoration of old stone houses, masonry, roofs and pools in Northern Portugal. Online cost calculator and FAQ."),
    "resolve": ("/small-repairs/", "BTS Resolve — Small Repairs — BTS Grupo",
                "Something broken at home? Send a photo on WhatsApp. We tell you the price before any work starts. Douro Valley, Aveiro, Porto."),
    "careers": ("/careers/", "Careers — Construction Jobs in Northern Portugal — BTS Grupo",
                "Open positions at BTS: drywall / pladur installers, stonemasons, formwork carpenters and rebar fixers (ferrageiros) in Northern Portugal."),
    "services": ("/property-care/", "HomeCare Property Care Plans — BTS Grupo",
                 "HomeCare plans for owners who are often away: inspections, maintenance and emergency response from €99/month."),
    "privacy": ("/privacy/", "Privacy Policy — BTS Grupo", "How Blame The Stars, Lda. handles your personal data."),
    "cookies": ("/cookies/", "Cookie Policy — BTS Grupo", "Cookies used on bts-grupo.com."),
    "complaints": ("/complaints/", "Complaints Book — BTS Grupo", "Livro de Reclamações and complaint information for Blame The Stars, Lda."),
}
# Portuguese titles and descriptions — keep in step with PAGE_TITLES_PT in index.html
PAGES_PT = {
    "home": ("Construção e Remodelação no Norte de Portugal | BTS Grupo",
             "Empresa de construção civil e remodelação em Peso da Régua: remodelação de casas, construção nova, telhados e piscinas no Douro, Porto e Aveiro. Orçamento fixo por escrito. Alvará IMPIC."),
    "works": ("Serviços de Construção e Remodelação — BTS Grupo",
              "Construção nova, remodelação de casas e apartamentos, recuperação de casas de pedra, alvenaria, telhados e piscinas no Norte de Portugal. Simulador de orçamento e perguntas frequentes."),
    "resolve": ("BTS Resolve — Pequenas Reparações — BTS Grupo",
                "Algo avariado em casa? Envie uma foto por WhatsApp. Dizemos o preço antes de começar. Vale do Douro, Aveiro e Porto."),
    "careers": ("Recrutamento — Emprego na Construção Civil no Norte — BTS Grupo",
                "Vagas na BTS: montadores de pladur / gesso cartonado, pedreiros, carpinteiros de cofragem e ferrageiros no Norte de Portugal."),
    "services": ("HomeCare — Manutenção de Imóveis — BTS Grupo",
                 "Planos HomeCare para proprietários ausentes: inspeções, manutenção e resposta a emergências, desde 99 €/mês."),
    "privacy": ("Política de Privacidade — BTS Grupo", "Como a Blame The Stars, Lda. trata os seus dados pessoais."),
    "cookies": ("Política de Cookies — BTS Grupo", "Cookies utilizados em bts-grupo.com."),
    "complaints": ("Livro de Reclamações — BTS Grupo", "Livro de Reclamações e informação sobre reclamações da Blame The Stars, Lda."),
}

src = (SITE / "index.html").read_text(encoding="utf-8")


def js_value(text, i):
    """Read one JavaScript literal (string, object or array of those) starting at text[i]. Returns (value, end)."""
    def skip(i):
        while True:
            while text[i] in " \t\r\n,":
                i += 1
            if not text.startswith("//", i):
                return i
            i = text.index("\n", i)

    def one(i):
        i = skip(i)
        c = text[i]
        if c in "'\"`":
            out, i = [], i + 1
            while text[i] != c:
                if text[i] == "\\":
                    out.append({"n": "\n", "t": "\t"}.get(text[i + 1], text[i + 1]))
                    i += 2
                else:
                    out.append(text[i])
                    i += 1
            return "".join(out), i + 1
        if c == "[":
            items, i = [], i + 1
            while True:
                i = skip(i)
                if text[i] == "]":
                    return items, i + 1
                v, i = one(i)
                items.append(v)
        if c == "{":
            d, i = {}, i + 1
            while True:
                i = skip(i)
                if text[i] == "}":
                    return d, i + 1
                if text[i] in "'\"":
                    k, i = one(i)
                else:
                    j = text.index(":", i)
                    k, i = text[i:j].strip(), j
                i = skip(i)
                if text[i] != ":":
                    raise SystemExit(f"Unexpected JavaScript near: {text[i - 60:i + 60]!r}")
                v, i = one(i + 1)
                while text[skip(i)] == "+":  # 'a' + 'b'
                    v2, i = one(skip(i) + 1)
                    v += v2
                d[k] = v
        raise SystemExit(f"Unexpected JavaScript near: {text[i - 60:i + 60]!r}")
    return one(i)


T, _ = js_value(src, src.index("const T = {") + len("const T = "))
FAQ_DATA, _ = js_value(src, src.index("const faqData = {") + len("const faqData = "))


def faq_parts(lang):
    faq = [(f["q"], f["a"]) for f in FAQ_DATA[lang]]
    static = "".join(f'<details class="faq-static"><summary>{escape(q)}</summary><p>{escape(a)}</p></details>' for q, a in faq)
    ld = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "inLanguage": lang, "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]},
        ensure_ascii=False).replace("</", "<\\/")
    return static, ld


# FAQ answers are normally added by JavaScript; write them into the HTML too so readers without JavaScript see them
FAQ_EMPTY = '<div id="faqList" style="display:flex;flex-direction:column;gap:8px;"></div>'
if FAQ_EMPTY not in src:
    raise SystemExit("FAQ container changed in index.html — update tools/build_pages.py")


def element_end(html, start, name):
    """Index just after the closing tag of the <name> element whose start tag ends at `start`."""
    depth = 1
    for m in re.finditer(rf"<(/?){name}\b[^>]*>", html[start:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return start + m.start(), start + m.end()
    raise SystemExit(f"No closing </{name}> found near: {html[start - 80:start]!r}")


VOID = {"input", "img", "br", "hr", "meta", "link", "source"}
INTERNAL = r'href="/((?:services|small-repairs|careers|property-care|privacy|cookies|complaints)/[^"]*|#[^"]*|)"'


def translate_markup(html):
    """What setLang('pt') does in the browser, done on the HTML text."""
    out, pos = [], 0
    for m in re.finditer(r'<([a-zA-Z][\w-]*)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>', html):
        if m.start() < pos or m.group(1).lower() in VOID:
            continue
        text = T.get(m.group(2), {}).get("pt")
        if text is None:
            continue
        inner_end, close_end = element_end(html, m.end(), m.group(1))
        out.append(html[pos:m.end()] + text + html[inner_end:close_end])
        pos = close_end
    html = "".join(out) + html[pos:]

    def placeholder(m):
        tag = m.group(0)
        text = T.get(m.group(1), {}).get("pt")
        return re.sub(r'placeholder="[^"]*"', f'placeholder="{escape(text)}"', tag) if text else tag
    html = re.sub(r'<[^>]*\sdata-i18n-ph="([^"]+)"[^>]*>', placeholder, html)
    html = html.replace('data-lang="pt" hidden', 'data-lang="pt"').replace('data-lang="en">', 'data-lang="en" hidden>')
    html = re.sub(INTERNAL, r'href="/pt/\1"', html)
    return html


def translate(html):
    parts = re.split(r"(<script\b.*?</script>)", html, flags=re.S)
    parts[0::2] = [translate_markup(p) for p in parts[0::2]]
    html = "".join(parts).replace('<html lang="en">', '<html lang="pt">', 1)
    return html


SOURCES = {"en": src, "pt": translate(src)}
FAQ_LD = {}
for lang in SOURCES:
    static, FAQ_LD[lang] = faq_parts(lang)
    SOURCES[lang] = SOURCES[lang].replace(FAQ_EMPTY, FAQ_EMPTY[:-6] + static + "</div>")


def split_pages(text):
    starts = [(m.start(), m.group(1)) for m in re.finditer(r'<div class="page-view[^"]*" id="page-([a-z]+)">', text)]
    end_all = text.index("<footer")
    if sorted(n for _, n in starts) != sorted(PAGES):
        raise SystemExit(f"Pages in index.html changed: {[n for _, n in starts]} — update PAGES in tools/build_pages.py")
    blocks = []
    for i, (s, name) in enumerate(starts):
        e = starts[i + 1][0] if i + 1 < len(starts) else end_all
        chunk = text[s:e]
        open_tag = re.match(r'<div[^>]*>', chunk).group(0)
        close = chunk.rindex("</div>")
        blocks.append((name, s, e, open_tag, chunk[len(open_tag):close], chunk[close:]))
    return blocks


BLOCKS = {lang: split_pages(text) for lang, text in SOURCES.items()}
PAGES_JS = {}
for lang, blocks in BLOCKS.items():
    all_pages = json.dumps({name: inner for name, _, _, _, inner, _ in blocks}, ensure_ascii=False).replace("</", "<\\/")
    PAGES_JS[lang] = ("(function(){var d=" + all_pages + ";"
                      "for(var k in d){var el=document.getElementById('page-'+k);if(el&&!el.childElementCount)el.innerHTML=d[k];}})();\n")
PAGES_JS_FILE = {"en": "pages.js", "pt": "pages-pt.js"}

REDIRECTS = {"legal": "/complaints/", "cost-calculator": "/services/#calculator", "homecare": "/property-care/", "faq": "/services/#faq", "advice": "/#tips"}
SCRIPT_FILES = {}


def url_of(page, lang):
    return DOMAIN + ("/pt" if lang == "pt" else "") + PAGES[page][0]


def build(page, lang):
    path = PAGES[page][0]
    title, desc = (PAGES[page][1:] if lang == "en" else PAGES_PT[page])
    text = SOURCES[lang]
    out = []
    pos = 0
    for name, s, e, open_tag, inner, tail in BLOCKS[lang]:
        out.append(text[pos:s])
        tag = re.sub(r'class="page-view( active)?"', 'class="page-view active"' if name == page else 'class="page-view"', open_tag)
        if name == page:
            out.append(tag + inner + tail)
        else:
            out.append(tag + tail)
        pos = e
    html = "".join(out) + text[pos:]

    # The other pages come from one shared file, so each address's own code holds only its own page
    js = PAGES_JS[lang]
    i = html.index("<script>\nlet currentLang")
    html = html[:i] + f'<script src="/{PAGES_JS_FILE[lang]}?v={hashlib.sha1(js.encode("utf-8")).hexdigest()[:10]}"></script>\n' + html[i:]

    url = url_of(page, lang)
    head = (f'<base href="/">\n' if not (path == "/" and lang == "en") else "")
    head += f'<link rel="canonical" href="{url}">\n<meta property="og:url" content="{url}">\n'
    # Tell Google the two language versions belong together
    head += (f'<link rel="alternate" hreflang="en" href="{url_of(page, "en")}">\n'
             f'<link rel="alternate" hreflang="pt" href="{url_of(page, "pt")}">\n'
             f'<link rel="alternate" hreflang="x-default" href="{url_of(page, "en")}">\n')
    head += f'<meta property="og:locale" content="{"pt_PT" if lang == "pt" else "en_GB"}">\n'
    if page == "works":
        head += f'<script type="application/ld+json">{FAQ_LD[lang]}</script>\n'
    html = html.replace("<head>", "<head>\n" + head, 1) if "<head>\n" in html else html
    html = re.sub(r"<title>.*?</title>", f"<title>{escape(title)}</title>", html, count=1, flags=re.S)
    html = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{escape(desc)}">', html, count=1)
    if page != "home" or lang == "pt":
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
for lang in SOURCES:
    for page, (path, _, _) in PAGES.items():
        folder = DIST / "pt" if lang == "pt" else DIST
        target = folder / path.strip("/") / "index.html" if path != "/" else folder / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(build(page, lang), encoding="utf-8")
    (DIST / PAGES_JS_FILE[lang]).write_text(PAGES_JS[lang], encoding="utf-8")
(DIST / "js").mkdir(exist_ok=True)
for name, code in SCRIPT_FILES.items():
    (DIST / name).write_text(code, encoding="utf-8")
for slug, dest in REDIRECTS.items():
    (DIST / slug).mkdir(exist_ok=True)
    (DIST / slug / "index.html").write_text(
        f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><title>BTS</title>'
        f'<link rel="canonical" href="{DOMAIN}{dest.split("#")[0]}"><meta http-equiv="refresh" content="0; url={dest}">'
        f'<script>location.replace("{dest}");</script></head><body><a href="{dest}">BTS</a></body></html>\n', encoding="utf-8")

today = datetime.date.today().isoformat()
(DIST / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    "".join(f'  <url><loc>{url_of(page, lang)}</loc><lastmod>{today}</lastmod>'
            f'<xhtml:link rel="alternate" hreflang="en" href="{url_of(page, "en")}"/>'
            f'<xhtml:link rel="alternate" hreflang="pt" href="{url_of(page, "pt")}"/></url>\n'
            for page in PAGES for lang in SOURCES) + "</urlset>\n", encoding="utf-8")
print("dist/ built:", ", ".join(p for p, _, _ in PAGES.values()), "+ the same under /pt/")
