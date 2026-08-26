# FLAT447 — personal site

Персональный сайт **FLAT447 (Alexey)** на **SvelteKit (Svelte 5)** + **Tailwind CSS v4**.
Тема оформления — **Everforest** (тёмная/светлая), фон — блуждающие размытые круги,
в шапке — имитация терминала `bash` с выводом `fastfetch` (ASCII-логотип FLAT447),
переключатели темы и языка (RU/EN) в виде слайдеров, копирование крипто-адресов с тостом.

## Стек

- [SvelteKit](https://kit.svelte.dev/) — фреймворк
- [Svelte 5](https://svelte.dev/) — runes (`$state`, `$effect`, `$props`, `$derived`)
- [Tailwind CSS v4](https://tailwindcss.com/) — стили (через `@tailwindcss/vite`)
- [`@sveltejs/adapter-static`](https://kit.svelte.dev/docs/adapter-static) — статическая сборка
- GitHub Pages + GitHub Actions — CI/CD

## Локальный запуск

```bash
npm install      # установка зависимостей
npm run dev      # дев-сервер на http://localhost:5173
npm run build    # статическая сборка в папку build/
npm run preview  # предпросмотр собранного сайта
npm run check    # проверка типов (svelte-check)
```

## Структура

```
src/
  app.css                 # Tailwind + палитра Everforest (CSS-переменные)
  app.html                # подключение шрифта Google Sans, no-flash скрипт темы
  lib/
    data.js               # все текстовые данные (проекты, соцсети, интересы, крипто)
    i18n.svelte.js        # словарь RU/EN, переключение языка
    toast.svelte.js       # состояние toast-уведомлений
    components/
      Background.svelte   # блуждающие круги
      Terminal.svelte     # терминал с печатью fastfetch
      ThemeToggle.svelte  # слайдер темы
      LangToggle.svelte   # слайдер языка
      Section.svelte      # подзаголовок раздела
      ProjectCard.svelte  # карточка проекта
      SocialLink.svelte   # ссылка на соцсеть
      CopyRow.svelte      # строка с крипто-адресом + копирование
      Toast.svelte        # всплывающее уведомление
  routes/
    +layout.js            # prerender
    +layout.svelte        # фон, шапка, переключатели, футер(нет)
    +page.svelte          # контент страницы
.github/workflows/deploy.yml  # сборка и публикация на GitHub Pages
```

## Деплой (CI/CD)

При каждом пуше в ветку `main` GitHub Actions:

1. ставит Node 22 и зависимости (`npm ci`);
2. собирает статику (`npm run build` → папка `build/`);
3. публикует её на **GitHub Pages**.

Для работы деплоя нужно включить Pages в настройках репозитория:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Лицензия

См. файл [`LICENSE`](LICENSE).
