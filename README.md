# Electron React App
<img width="889" alt="image" src="https://github.com/user-attachments/assets/764933f0-6d2e-41c9-a2ff-36f3215f25f5" />


<br />
## Project Structure

<!-- prettier-ignore-start -->
```markdown
├── app/                        # Renderer process files
│   ├── assets/                 # Static assets (images, fonts, etc)
│   ├── components/             # React components
│   │   ├── App.tsx             # Application component
│   ├── styles/                 # CSS and Tailwind files
│   │   ├── app.css             # App stylesheet
│   │   └── tailwind.css        # Tailwind stylesheet
│   ├── index.html              # Entry HTML file
│   └── renderer.tsx            # Renderer process entry
├── lib/                        # Shared library code
│   ├── main/                   # Main process code
│   │   ├── index.ts            # Main entry point for Electron
│   │   └── ...                 # Other main process modules
│   ├── preload/                # Preload scripts for IPC
│   │   ├── index.ts            # Preload script entry
│   │   └── api.ts              # Exposed API for renderer
│   ├── welcome/                # Welcome kit components
│   └── window/                 # Custom window implementation
├── resources/                  # Build resources
├── .eslintrc                   # ESLint configuration
├── .prettierrc                 # Prettier format configuration
├── electron-builder.yml        # Electron builder configuration
├── electron.vite.config.ts     # Vite configuration for Electron
├── package.json                # Project dependencies and scripts
└── tsconfig.node.json          # Main process tsconfig
└── tsconfig.web.json           # Renderer process tsconfig

```
<!-- prettier-ignore-end -->
