// BTS website configuration.
// Fill in after creating the Supabase project (Settings → API):
//   supabaseUrl — "Project URL", e.g. https://abcdxyz.supabase.co
//   supabaseKey — the PUBLIC "anon" / "publishable" key (never the service_role / secret key)
// Leave both empty to run the site without a backend (forms then go to WhatsApp).
window.BTS_CONFIG = {
  supabaseUrl: "https://xtwluygtasaxcykikyvg.supabase.co",
  supabaseKey: "sb_publishable_HOtRIkK6YtJoRwZrjxX6cA_VQf_A4Oa",
  // AI assistant server (Cloudflare Worker), e.g. https://bts-ai.YOUR-NAME.workers.dev/api/chat
  // Leave empty when the site itself runs on Cloudflare Pages with _worker.js.
  aiEndpoint: ""
};
