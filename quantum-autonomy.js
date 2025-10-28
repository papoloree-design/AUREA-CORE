<script src="quantum-autonomy.js"></script>
// AUREA CORE ∞ Quantum Autonomy
// Comprueba el estado de GitHub, Pinata y Web3.Storage
const endpoints = {
  github: "https://papoloree-design.github.io/AUREA-CORE/",
  pinata: "https://gateway.pinata.cloud/ipfs/bafybeihw6bzjfh4w5zewot55t3fgtbrtfyfrqixfyogbwrpdrxq7q66jpy",
  web3:   "https://bafybeias7vf24d6uiy6okhobv7iy2ebtysnhvcfd7kq5auelfhpulzu7wm.ipfs.w3s.link/"
};

async function ping(url){
  try{
    const r = await fetch(url,{method:"HEAD",mode:"no-cors"});
    return r ? "🟢" : "🔴";
  }catch{ return "🔴"; }
}

async function checkAll(){
  const results = await Promise.all([
    ping(endpoints.github),
    ping(endpoints.pinata),
    ping(endpoints.web3)
  ]);
  const [gh,pi,w3] = results;
  const hud = document.createElement("div");
  hud.style.position="fixed"; hud.style.bottom="10px"; hud.style.right="15px";
  hud.style.color="#00ffff"; hud.style.fontFamily="monospace";
  hud.style.fontSize="12px"; hud.style.textAlign="right";
  hud.innerHTML = `GitHub ${gh}<br>Pinata ${pi}<br>Web3 ${w3}`;
  document.body.appendChild(hud);
}

document.addEventListener("DOMContentLoaded", checkAll);
// Re-ejecutar cada 24 h
setInterval(checkAll, 24*60*60*1000);
