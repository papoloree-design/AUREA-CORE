# AUREA CORE ∞ — Web Universal Quantum v26.0
Frontend listo para **GitHub Pages** (Web2) con conectores a **IPFS/Pinata** y **Solana** (Web3).

## Subir a GitHub (Pages)
1) Crea repo `aurea-core-unified` en tu cuenta.
2) Sube todos los archivos de esta carpeta al repo (Upload files).
3) Activa GitHub Pages: Settings → Pages → Source: main / root.
4) Abre https://<tuusuario>.github.io/aurea-core-unified/

## Conectar Pinata / Web3
- Edita `manifest/manifest_ai_identity.json` con tu repo y wallet.
- En `pinata.json` coloca tu `pinata_jwt` (recomendado usar un Worker).
- `modules/web3_bridge.js` es un placeholder: usa un relay/worker para firmar TX.

## Seguridad
No pongas llaves privadas en el frontend. Usa un **Worker** para acciones sensibles.
