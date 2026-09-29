# BTS — сайт + CRM на бесплатном сервере

Эта папка — готовый сайт и CRM, которые работают с одной общей базой данных:

- **site/** — сайт (главная страница, калькулятор, формы, вакансии, правовые страницы).
- **site/crm/** — CRM (вход по паролю). Будет открываться по адресу `ваш-сайт/crm/`.
- **site/config.js** — здесь указываются 2 параметра подключения к базе.
- **supabase/schema.sql** — структура базы данных (запускается один раз).

## Где всё находится сейчас

- **Сайт:** https://olenacontroller.github.io/bts-website/
- **CRM:** https://olenacontroller.github.io/bts-website/crm/ (вход по email и паролю из Supabase)
- **Код:** https://github.com/olenacontroller/bts-website — публикуется из ветки `gh-pages` (= содержимое папки `site`).

Обновить сайт после изменений (делает Claude, или вручную в Git Bash из папки проекта):
```bash
git add -A && git commit -m "Update site" && git push origin main
git push origin `git subtree split --prefix site main`:gh-pages --force
```
Через ~1 минуту изменения видны на сайте.

## Как всё связано

```
Посетитель сайта ──заполняет форму / прикладывает CV или фото──▶ Supabase (база + файлы)
                                                                     │
Вы в CRM (вход по паролю) ◀──── видите заявку сразу, в реальном времени ┘
```

- **Хостинг сайта — Cloudflare Pages.** Бесплатно, без ограничений по трафику, коммерческое использование разрешено.
  (На уроке показывали Vercel, но его бесплатный тариф Hobby разрешён только для некоммерческих проектов, а у вас компания.)
- **База данных и файлы — Supabase.** Бесплатно: 500 МБ базы и 1 ГБ файлов (фото объектов, CV). Сервер выбираем в ЕС, это важно для GDPR.
- Посетители сайта могут **только добавить** заявку. Читать, менять и удалять заявки могут только сотрудники, внесённые в список `staff`.

---

## Шаг 1. Supabase (база данных) — ~10 минут

1. Откройте **https://supabase.com** → **Start your project** → зарегистрируйтесь (через GitHub или email).
2. **New project**:
   - Name: `bts`
   - Database Password: придумайте надёжный пароль и **сохраните его** (мне его присылать не нужно).
   - Region: **Europe (Frankfurt)** или **West EU (Ireland)**.
   - Plan: **Free**.
3. Подождите 1–2 минуты, пока проект создаётся.
4. Слева **SQL Editor** → **New query** → откройте файл `supabase/schema.sql`, скопируйте весь текст, вставьте → **Run**. Должно появиться «Success».
5. Слева **Authentication → Users → Add user → Create new user**:
   - ваш email и пароль для входа в CRM,
   - поставьте галочку **Auto Confirm User**.
6. Снова **SQL Editor → New query**, вставьте строку (подставьте свой email) → **Run**:
   ```sql
   insert into public.staff (user_id, email) select id, email from auth.users where email = 'ВАШ-EMAIL@example.com';
   ```
   (Так же добавляются коллеги: создать пользователя → выполнить эту строку с его email.)
7. **Authentication → Sign In / Providers** → отключите **Allow new users to sign up** (регистрироваться в CRM сможете только вы).
8. **Project Settings → API Keys** (или **Data API**) — скопируйте 2 значения и пришлите мне:
   - **Project URL** — вида `https://abcdefgh.supabase.co`
   - **anon / publishable key** — длинный ключ с пометкой *public*.

   ⚠️ **Не присылайте и никуда не вставляйте ключ `service_role` / `secret`.** Он даёт полный доступ к базе. Публичный ключ `anon` безопасен: защиту обеспечивают правила из `schema.sql`.

## Шаг 2. Я подключаю сайт к базе

Получив Project URL и anon key, я впишу их в `site/config.js` и проверю, что заявки и файлы сохраняются, а в CRM вход работает.
(Можно и самостоятельно: открыть `site/config.js` в Блокноте и вставить значения в кавычки.)

## Шаг 3. Cloudflare Pages (хостинг) — ~5 минут

1. Откройте **https://dash.cloudflare.com/sign-up** → зарегистрируйтесь (бесплатно).
2. Слева **Workers & Pages** → **Create** → вкладка **Pages** → **Upload assets** (Direct Upload).
3. Project name: `bts-grupo` → **Create project**.
4. Перетащите **папку `site`** целиком в окно загрузки → **Deploy site**.
5. Готово: сайт работает по адресу вида **https://bts-grupo.pages.dev**, CRM — **https://bts-grupo.pages.dev/crm/**.

Каждое обновление сайта: **Workers & Pages → bts-grupo → Create deployment →** снова перетащить папку `site`.

## Шаг 4. Рекомендуется сразу

- **Свой домен** (например, `bts-grupo.com`, если он ваш): в проекте Pages → **Custom domains → Set up a domain**.
- **Аналитика посещений без cookies:** в проекте Pages → **Metrics → Web Analytics → Enable**. Это бесплатно и не требует баннера согласия на cookies, что соответствует вашей Политике cookies.
- **Адрес для писем Supabase:** Supabase → **Authentication → URL Configuration → Site URL** = адрес вашего сайта (нужно для писем сброса пароля).

## Шаг 5. AI-помощник для всех посетителей (Gemini 2.5 Flash)

Сайт остаётся на GitHub Pages, а помощнику нужен маленький сервер — **Cloudflare Worker** `bts-ai`. Он хранит ключ Gemini в секрете, держит инструкции и знания о компании и отвечает только сайту `olenacontroller.github.io`.

**A. Ключ Gemini**
1. **https://aistudio.google.com** → Get API key → Create API key → проект Google Cloud.
2. Включите оплату (**Set up billing**) — для посетителей из ЕС разрешён только платный тариф.
3. Google Cloud Console: **Billing → Budgets & alerts** (бюджет, напр. 10 €) и **APIs & Services → Generative Language API → Quotas** (напр. 1 000 запросов в день).

**B. Worker в Cloudflare**
1. **https://dash.cloudflare.com/sign-up** → регистрация.
2. **Workers & Pages → Create → Create Worker** (Start with Hello World) → имя **`bts-ai`** → **Deploy**.
3. **Edit code** → выделить всё (Ctrl+A) → вставить код из файла **`site/_worker.js`** (Ctrl+V) → **Deploy**.
4. Вернуться к Worker → **Settings → Variables and Secrets → Add** → Type **Secret**, name **`GEMINI_API_KEY`**, value — ваш ключ → **Deploy/Save**.
5. Скопировать адрес Worker (вида `https://bts-ai.ВАШ-ИМЯ.workers.dev`) и прислать Claude. Ключ не присылать.

**C. Подключение (делает Claude)** — адрес вписывается в `site/config.js` → `aiEndpoint: "https://bts-ai.….workers.dev/api/chat"`, сайт публикуется, кнопка «Ask AI» появляется у всех.

Проверка: открыть `https://bts-ai.….workers.dev/` — должно быть `"ready":true`.

Когда меняются тексты сайта (услуги, планы, вакансии): `python ai/build_worker.py` → снова вставить `site/_worker.js` в Worker → Deploy. Если сайт переедет на свой домен — добавить его в `ALLOWED_ORIGINS` в `ai/worker.template.js`.

## Важно знать про бесплатный тариф Supabase

Бесплатный проект **засыпает после 7 дней без активности**. Пока он спит, формы сайта автоматически переключаются на запасной вариант (WhatsApp), так что заявки не теряются. Чтобы проект не засыпал, достаточно открывать CRM хотя бы раз в неделю. Если заявок станет много, есть платный тариф Pro ($25/мес) без засыпания.

## Что работает без сервера

Если `config.js` пустой, сайт работает как раньше: формы собирают данные и открывают WhatsApp с готовым сообщением. Поля загрузки фото и CV появляются только после подключения базы.
