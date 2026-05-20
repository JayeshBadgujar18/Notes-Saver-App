# paste-App

A lightweight pastebin-style frontend built with React, Vite, Tailwind CSS and Redux Toolkit. Use this project to create, view, and manage simple text "pastes" locally in the browser.

## Features

- Create and view pastes using the UI components in `src/components`
- Global state management with Redux Toolkit (`redux/pasteSlice.js`)
- Tailwind CSS for styling
- Fast development with Vite and HMR

## Tech stack

- React + Vite
- Tailwind CSS
- Redux Toolkit

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

Open http://localhost:5173/ in your browser.

## Live demo

The app is deployed on Vercel: https://notes-saver-app-seven.vercel.app/

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project structure

- [src/main.jsx](src/main.jsx) – App entry
- [src/App.jsx](src/App.jsx) – Top-level component
- [src/components](src/components) – React components (`Home.jsx`, `Navbar.jsx`, `Pastes.jsx`, `Viewpastes.jsx`)
- [redux/store.js](redux/store.js) – Redux store setup
- [redux/pasteSlice.js](redux/pasteSlice.js) – Paste state and reducers
- [src/assets](src/assets) – Static assets

## Usage

- Create a new paste from the Home page form.
- Browse existing pastes in the Pastes view and open them with Viewpastes.

## Troubleshooting

- If you see dependency warnings after `npm install`, run `npm audit` and `npm audit fix` to apply fixes where safe.
- If the dev server doesn't start, ensure no other process is using port 5173, or run `npm run dev -- --port 5174` to change the port.

## Contributing

Contributions and improvements are welcome. Open an issue or submit a PR.

## License

MIT
