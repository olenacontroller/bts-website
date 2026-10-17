"""Publish bts-grupo.com: build dist/ (one address per page) and push it to the gh-pages branch.

Run from the project folder:  python tools/publish.py
Use this instead of pushing site/ directly — a plain push of site/ still works but loses the per-page addresses.
"""
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
subprocess.run([sys.executable, str(ROOT / "tools" / "build_pages.py")], check=True)

origin = subprocess.run(["git", "-C", str(ROOT), "remote", "get-url", "origin"], check=True, capture_output=True, text=True).stdout.strip()
head = subprocess.run(["git", "-C", str(ROOT), "rev-parse", "--short", "HEAD"], check=True, capture_output=True, text=True).stdout.strip()
gitdir = Path(tempfile.mkdtemp(prefix="bts-publish-"))
try:
    env_git = ["git", f"--git-dir={gitdir}", f"--work-tree={ROOT / 'dist'}"]
    subprocess.run(env_git + ["init", "-q"], check=True)
    subprocess.run(env_git + ["add", "-A"], check=True)
    subprocess.run(env_git + ["-c", "user.name=Blame The Stars", "-c", "user.email=geral@bts-grupo.com",
                              "commit", "-q", "-m", f"Publish site (built from main {head})"], check=True)
    subprocess.run(env_git + ["push", "-q", "--force", origin, "HEAD:gh-pages"], check=True)
finally:
    shutil.rmtree(gitdir, ignore_errors=True)
print("Published to gh-pages — live on https://bts-grupo.com in about a minute.")
