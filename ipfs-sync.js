// 🌐 AUREA × ARCANUM Quantum IPFS Sync
const IPFS_GATEWAY = "https://w3s.link/ipfs/";
const IPFS_CID = "bafkreibir7tu22ebvz3resud3sshryjc6tl7l473y2hnd3yzbwkxd2rxmy";

async function syncIPFS() {
  try {
    const res = await fetch(`${IPFS_GATEWAY}${IPFS_CID}/index.html`, { cache: "no-store" });
    const statusEl = document.querySelector("#ipfsStatus") || document.createElement("div");

    if (res.ok) {
      console.log("✅ IPFS conectado:", IPFS_CID);
      statusEl.textContent = "🟢 IPFS Activo";
      statusEl.style.color = "#0f0";
    } else {
      console.warn("⚠️ IPFS detectado pero sin respuesta");
      statusEl.textContent = "🟡 IPFS en espera";
      statusEl.style.color = "#ff0";
    }

    document.body.appendChild(statusEl);
  } catch (e) {
    console.error("❌ Error IPFS:", e);
    const statusEl = document.querySelector("#ipfsStatus") || document.createElement("div");
    statusEl.textContent = "🔴 IPFS desconectado";
    statusEl.style.color = "#f00";
    document.body.appendChild(statusEl);
  }
}

syncIPFS();
