// BTS — email alert for every new website request (Google Apps Script, script.google.com).
// Supabase calls this web app after a new row in leads or candidates (see supabase/email-alerts.sql).
// KEY must match the ?key= in the Supabase trigger URL. Never commit the real key: this repo is public.
const KEY = 'PUT-KEY-HERE';
const TO = 'olena.manzhos@bts-grupo.com';
const CRM = 'https://bts-grupo.com/crm/';

function doPost(e) {
  if (!e || !e.parameter || e.parameter.key !== KEY) return ContentService.createTextOutput('forbidden');
  const data = JSON.parse(e.postData.contents);
  sendAlert(data.table, data.record || {});
  return ContentService.createTextOutput('ok');
}

function sendAlert(table, r) {
  const when = r.created_at ? Utilities.formatDate(new Date(Number(r.created_at)), 'Europe/Lisbon', 'dd/MM/yyyy HH:mm') : '';
  const photos = (r.photo_paths || []).length;
  let subject, rows;
  if (table === 'candidates') {
    subject = 'New job application — ' + r.name;
    rows = [
      ['Name', r.name], ['Phone', r.phone], ['Email', r.email], ['Vacancy', r.vacancy_id],
      ['Experience', r.experience], ['Availability', r.availability], ['City', r.city],
      ['Work permit', r.permit], ['CV attached', r.cv_path ? 'yes' : ''], ['Notes', r.notes]
    ];
  } else {
    const resolve = r.service === 'BTS Resolve';
    subject = (resolve ? 'New BTS Resolve request — ' : 'New estimate request — ') + r.name;
    rows = [
      ['Name', r.name], ['Phone', r.phone], ['Email', r.email], ['Location', r.location],
      ['Service', r.service], ['Desired start', r.timing], ['Budget', r.budget],
      ['Calculator estimate', r.calc && r.calc.summary], ['Description', r.description],
      ['Photos', photos ? photos + ' (see the CRM)' : '']
    ];
  }
  const body = rows.filter(x => x[1]).map(x => x[0] + ': ' + x[1]).join('\n') +
    '\n\nReceived: ' + when + '\nLanguage: ' + (r.lang || '') + '\n\nOpen the CRM: ' + CRM;
  const mail = { to: TO, subject: subject, body: body, name: 'BTS website' };
  if (r.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r.email)) mail.replyTo = r.email;
  MailApp.sendEmail(mail);
}

function testEmail() {
  sendAlert('leads', {
    name: 'Test — please ignore', phone: '+351 900 000 000', location: 'Porto',
    service: 'BTS Resolve', description: 'This is a test of the email alerts.',
    created_at: Date.now(), lang: 'en'
  });
}
