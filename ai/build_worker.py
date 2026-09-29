"""Build site/_worker.js: the AI assistant server with the company knowledge taken from site/index.html.

Run again whenever the website text changes:   python ai/build_worker.py
"""
import json
import re
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
html = (ROOT / "site" / "index.html").read_text(encoding="utf-8")
soup = BeautifulSoup(html, "html.parser")


def section(selector, limit):
    el = soup.select_one(selector)
    if el is None:
        raise SystemExit(f"Section not found in index.html: {selector}")
    for tag in el.select("script, style, svg, form, [data-lang='pt']"):
        tag.decompose()
    text = el.get_text("\n", strip=True)
    text = re.sub(r"\n{2,}", "\n", text)
    return text[:limit]


def faq_en():
    block = re.search(r"const faqData = \{\s*en: \[(.*?)\],\s*pt:", html, re.S)
    if not block:
        raise SystemExit("FAQ data not found in index.html")
    pairs = re.findall(r"q: '((?:[^'\\]|\\.)*)', a: '((?:[^'\\]|\\.)*)'", block.group(1))
    return "\n".join(f"Q: {q.replace(chr(92) + chr(39), chr(39))}\nA: {a.replace(chr(92) + chr(39), chr(39))}" for q, a in pairs)


knowledge = "\n\n".join([
    "## Company\n"
    "Blame The Stars, Lda. (brand: BTS — Building The Solution). NIF 518103900. IMPIC licence (alvará) n.º 115511 - PUB. "
    "Share capital €67,000. Office: Rua Professor José Lacerda, n.º 19, 5050-081 Godim, Peso da Régua. "
    "IMPIC-licensed and insured construction company in Northern Portugal: Aveiro, Porto, Douro Valley, Braga, Viseu. "
    "Phone +351 933 255 248. WhatsApp +351 91 396 55 33. Email geral@bts-grupo.com. "
    "Replies to enquiries within 48 hours, Monday–Saturday. Free site visit; video site assessment for owners who are abroad. "
    "Fixed, written, itemised quote. Bilingual (English/Portuguese) project manager. Weekly photo and video updates. "
    "The website has a 3-step cost calculator (indicative ranges) and an estimate request form.",
    "## Services\n" + section("#services", 3000),
    "## Why clients choose us\n" + section("#about", 2500),
    "## Frequently asked questions\n" + faq_en(),
    "## HomeCare subscription plans (full guide)\n" + section("#page-services", 15000),
    "## Careers (open vacancies)\n" + section("#careers .cr-jobs", 4000),
])

template = (ROOT / "ai" / "worker.template.js").read_text(encoding="utf-8")
marker = "/*__KNOWLEDGE__*/''"
if marker not in template:
    raise SystemExit("Knowledge marker missing in worker.template.js")
out = template.replace(marker, json.dumps(knowledge, ensure_ascii=False))
(ROOT / "site" / "_worker.js").write_text(out, encoding="utf-8")
print(f"site/_worker.js written — knowledge {len(knowledge):,} characters")
