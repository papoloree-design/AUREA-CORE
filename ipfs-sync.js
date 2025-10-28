// ipfs-sync.js — Sincronización AUREA FUSION (Pinata + Web3.Storage)
const IPFS_CONFIG = {
  cids: [
    // CID de Pinata
    "bafkreigd5jip23gmfnhmm2rtt5lxgoabz2wrcoedbwiq736ce5p6navvem",
    // CID de Web3.Storage
    "bafybeibecheu4ecqg2qqkhjumnxhqhomvod746mmveilpxo7i432cysvge"
  ],
  gateways: [
    "https://ipfs.io/ipfs/",
    "https://w3s.link/ipfs/",
    "https://gateway.pinata.cloud/ipfs/",
    "https://cloudflare-ipfs.com/ipfs/"
  ]
};

async function checkIPFS() {
  const status = document.getElementById('status-ipfs');
  try {
    let okCount = 0;
    for (const cid of IPFS_CONFIG.cids) {
      for (const gw of IPFS_CONFIG.gateways) {
        const url = gw + cid;
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) okCount++;
      }
    }
    if (okCount > 0) {
      status.firstElementChild.className = 'ok';
      status.lastChild.textContent = ' IPFS conectado (' + okCount + ')';
      console.log('✅ IPFS activo:', okCount, 'gateways responden.');
      return true;
    }
  } catch (e) {
    console.warn('⚠️ Error al verificar IPFS:', e);
  }
  status.firstElementChild.className = 'bad';
  status.lastChild.textContent = ' IPFS desconectado';
  return false;
}
window.checkIPFS = checkIPFS; x
