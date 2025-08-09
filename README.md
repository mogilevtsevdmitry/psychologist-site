# Сайт-визитка психолога (Vite)

Современный, адаптивный лендинг в теплых пастельных оттенках. Сделан на Vite + TypeScript без фреймворков.

## Быстрый старт
```bash
npm i
npm run dev
```

## Билд
```bash
npm run build
npm run preview
```

## Деплой на GitHub Pages
1) Создайте репозиторий на GitHub и запушьте этот проект.
2) Убедитесь, что в `vite.config.ts` установлено `base: './'` (уже так).
3) Включите GitHub Actions и создайте переменную `ACTIONS_DEPLOY_KEY` **не требуется** (мы используем токен GITHUB_TOKEN).
4) Workflow ниже собирает проект и публикует содержимое `dist` в ветку `gh-pages`.

Затем в настройках репозитория GitHub → Settings → Pages выберите Source: **Deploy from a branch**, Branch: **gh-pages**.

### Кастомизация
- Цвета и типографика: `src/styles.css` (переменные `:root`).
- Тексты, разделы, ссылки: `src/main.ts`.
- Добавьте свои фото в `public/` и используйте относительные пути.

