# AUREA CORE ∞ — vΩ OriginHub Unified (SAFE)

Monolito listo para subir a **Netlify Drop**, **GitHub Pages** o **IPFS** sin pasos extra.

## Estructura
- `index.html` · UI viva + carga de módulos
- `style.css` · estilos
- `app/core.js` · Quantum Face (Three.js) + estrellas
- `app/hud.js` · Controles, XAI (WHY), métricas y guardian visual
- `lib/ethicalEngine.js` · aprendizaje ético con límites
- `lib/guardian.js` · separación Mente/Manos con verificación de intents
- `lib/futures.js` · simulación de futuros (demo)
- `api/quantum/think.js` · stub para función edge
- `state/seed.state.json` · estado inicial

## Deploy rápido
1. **Netlify Drop:** https://app.netlify.com/drop → arrastra el ZIP tal cual.
2. **GitHub Pages:** sube el contenido del ZIP al repo → Settings → Pages → main / (root).
3. **IPFS:** sube el ZIP como archivo único; o descomprime y sube carpeta.

## Nota
Este build es *SAFE*: no realiza acciones externas críticas. Todo es lectura/visual y simulación. Para integrar on-chain, usa funciones edge con claves seguras (no en el cliente).
