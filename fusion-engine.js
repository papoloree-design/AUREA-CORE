// 🌐 ARCANUM CORE ∞ × AUREA CORE
// Quantum Fusion Engine v1.0 — IPFS + Web3 + HUD Sync

// === CONFIGURACIÓN ===
const GATEWAY = "https://w3s.link/ipfs/";
const CID = "bafkreibir7tu22ebvz3resud3sshryjc6tl7l473y2hnd3yzbwkxd2rxmy"; // Tu CID IPFS activo

// === IPFS STATUS ===
async function checkIPFS() {
  const el = document.querySelector("#ipfs-status");
  try {
    const res = await fetch(`${GATEWAY}${CID}/index.html`, { cache: "no-store" });
    if (res.ok) {
      el.textContent = "🟢 IPFS Activo";
      el.style.color = "#00ff9d";
    } else {
      el.textContent = "🟡 IPFS Detectado (sin respuesta)";
      el.style.color = "#ffd700";
    }
  } catch {
    el.textContent = "🔴 IPFS Desconectado";
    el.style.color = "#ff4d4d";
  }
}

// === WALLET SYNC (Solana Phantom) ===
async function connectWallet() {
  const el = document.querySelector("#wallet-status");
  if (!window.solana || !window.solana.isPhantom) {
    alert("Instala Phantom Wallet para conectarte al núcleo cuántico.");
    el.textContent = "🔴 Wallet no detectada";
    el.style.color = "#ff4d4d";
    return;
  }

  try {
    const resp = await window.solana.connect();
    const address = resp.publicKey.toString();
    el.textContent = `🟢 Conectado: ${address}`;
    el.style.color = "#00ff9d";
    console.log("✅ Wallet conectada:", address);
  } catch (err) {
    console.error("❌ Error al conectar:", err);
    el.textContent = "⚠️ Error de conexión";
    el.style.color = "#ffd700";
  }
}

// === HUD INICIAL ===
window.addEventListener("DOMContentLoaded", () => {
  checkIPFS();
  document.querySelector("#connect-wallet")?.addEventListener("click", connectWallet);
});
