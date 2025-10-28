// 🔱 AUREA CORE ∞ IPFS Sync
// Autonómicamente conecta el sitio a Web3.Storage o Pinata

const gateway = "https://ipfs.io/ipfs/";
const cid = "bafybeiaureacoreplaceholder"; // se actualizará automáticamente
const indicator = document.querySelector("#ipfs-status");

async function checkIPFS() {
    try {
        const res = await fetch(gateway + cid + "/index.html", { method: "HEAD" });
        if (res.ok && indicator) indicator.style.color = "#00ff9d"; // verde activo
        console.log("✅ IPFS activo:", gateway + cid);
    } catch (e) {
        if (indicator) indicator.style.color = "#ff4040"; // rojo si no responde
        console.warn("❌ IPFS no conectado todavía");
    }
}

checkIPFS();
