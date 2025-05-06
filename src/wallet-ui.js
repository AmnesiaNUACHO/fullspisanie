// wallet-ui.js

// === Стили ===
const styleTag = document.createElement('style')
styleTag.innerHTML = `
  .wallet-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: background 0.4s ease;
  }
  .wallet-modal.hidden {
    pointer-events: none;
  }
  .wallet-modal.hidden .wallet-modal-content {
    transform: translateY(100%);
  }

  .wallet-modal-content {
    position: relative;
    width: 100%;
    max-width: 480px;
    height: 50vh;
    background: #131414;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #2b2b2b;
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.3);
    padding: 16px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    font-family: Inter, sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* После снятия hidden */
  .wallet-modal:not(.hidden) .wallet-modal-content {
    transform: translateY(0);
  }

  /* Крестик закрытия */
  .wallet-modal-content .wallet-close-cross {
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    color: #ccc;
    font-size: 20px;
    cursor: pointer;
  }

  .wallet-modal-content h3 {
    margin: 0;
    margin-top: 8px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .wallet-search {
    position: sticky;
    top: 44px;
    width: calc(94% - 32px);
    margin: 12px 16px;
    padding: 10px 14px;
    background: #181919;
    border: 1px solid #2b2b2b;
    border-radius: 12px;
    color: #fff;
    font-size: 15px;
    outline: none;
    z-index: 1;
  }

  .wallet-list {
    flex: 1;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    padding: 0 16px;
  }

  .wallet-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    background: #181919;
    border-radius: 14px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  .wallet-item:hover {
    background: #202121;
  }
  .wallet-item img {
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }
  .wallet-item span {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`
document.head.appendChild(styleTag)


// === HTML шаблон модалки ===
const modalHTML = `
  <div id="wallet-modal" class="wallet-modal hidden">
    <div class="wallet-modal-content">
      <button class="wallet-close-cross" onclick="closeWalletModal()">✕</button>
      <h3>Select your wallet</h3>
      <input class="wallet-search" type="text" placeholder="Search wallets..." />
      <ul class="wallet-list" id="wallet-list"></ul>
    </div>
  </div>
`
document.body.insertAdjacentHTML('beforeend', modalHTML)

// === Кошельки (ссылки и иконки проверены) ===
const walletList = [
  {
    name: 'MetaMask',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png',
    link: href => `https://metamask.app.link/dapp/${href}`
  },
  {
    name: 'Trust Wallet',
    icon: 'https://trustwallet.com/assets/images/media/assets/TWT.png',
    link: href => `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(href)}`
  },
  {
    name: 'Bitget Wallet',
    icon: 'https://web3.bitget.com/favicon.ico',
    link: href => `https://bkcode.vip?action=dapp&url=${encodeURIComponent(href)}`
  },
  {
    name: 'OKX Wallet',
    icon: 'https://www.okx.com/cdn/assets/imgs/221/B1041DB14722953A.png',
    link: href => `okx://wallet/dapp/details?url=${encodeURIComponent(href)}`
  },
  {
    name: 'Binance Wallet',
    icon: 'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png',
    link: href => `binance://dapp/${encodeURIComponent(href)}`
  },
  {
    name: 'SafePal',
    icon: 'https://play-lh.googleusercontent.com/uT6ByyNvUeLRMDnMKEC91RrbHftl2EBB58r9vZaNbiYf1F5Twa33_Hx0zYvEfCtiG1kE',
    link: href => `https://safepal.link/app/browser?url=${encodeURIComponent(href)}`
  },
  {
    name: 'Bybit Wallet',
    icon: 'https://www.bybit.com/favicon.ico',
    link: href => `bybit://wallet/connect?url=${encodeURIComponent(href)}`
  },
  {
    name: 'Exodus',
    icon: 'https://www.exodus.com/favicon.ico',
    link: () => `https://www.exodus.com/`
  },
  {
    name: 'BitKeep',
    icon: 'https://dex-bin.bnbstatic.com/static/dapp-uploads/-3oftVu9lS0D5sm9-ol01',
    link: href => `https://bitkeep.com/walletconnect?dapp=${encodeURIComponent(href)}`
  },
  {
    name: 'Ronin Wallet',
    icon: 'https://play-lh.googleusercontent.com/HGoGVDTQ5DuqZMy7w9kmuDlk_BNbVKDLCS7qNRE77puY4skfM1rptrDoifxIK5GJ06E',
    link: href => `https://wallet.roninchain.com/in_app_browser?url=${encodeURIComponent(href)}`
  },
  {
    name: 'Atomic Wallet',
    icon: 'https://play-lh.googleusercontent.com/t8vnANR3Ofzoe1rgCTV5McOtbnXLxt7uTKa7nM9uVxthfeXzOEkLiyf6Mbwo6bf1Gjs',
    link: href => `https://link.atomicwallet.io/?dapp=${encodeURIComponent(href)}`
  },
  {
    name: '1inch Wallet',
    icon: 'https://1inch.io/assets/token-logo/1inch_token.svg',
    link: href => `https://app.1inch.io/#/1/dapp/${href}`
  },
  {
    name: 'Uniswap',
    icon: 'https://app.uniswap.org/favicon.ico',
    link: () => `https://app.uniswap.org/`
  },
  {
    name: 'Rainbow',
    icon: 'https://play-lh.googleusercontent.com/fMUvmUmIpIDoZGTACYohbY3DE7-24GFkQ21WjVHxa57qluzWrr7khkycE8cz_juhew',
    link: href => `https://rnbwapp.com/dapp/${href}`
  },
  {
    name: 'TokenPocket',
    icon: 'https://play-lh.googleusercontent.com/hcnLVaagPA_c8TGRDtV4c3R7mkhw3pAlop1WI4zJjjokJ5DErElAqwqkYriYmRRCaaY',
    link: href => `tpoutside://open?dappUrl=${encodeURIComponent(href)}`
  },
  {
    name: 'Safe (Gnosis)',
    icon: 'https://app.safe.global/images/safe-logo-green.png',
    link: href => `https://app.safe.global/${href}`
  },
  {
    name: 'Ledger Live',
    icon: 'https://play-lh.googleusercontent.com/mHjR3KaAMw3RGA15-t8gXNAy_Onr4ZYUQ07Z9fG2vd51IXO5rd7wtdqEWbNMPTgdqrk=w240-h480-rw',
    link: href => `ledgerlive://open?url=${encodeURIComponent(href)}`
  }
]

// === Рендер и поиск ===
function renderWallets(filter = '') {
    const listEl = document.getElementById('wallet-list')
    const href = window.location.href
    listEl.innerHTML = ''
    walletList
      .filter(w => w.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(w => {
        const li = document.createElement('li')
        li.className = 'wallet-item'
        li.innerHTML = `<img src="${w.icon}" alt="${w.name}" /><span>${w.name}</span>`
        li.onclick = () => window.location.href = w.link(href)
        listEl.append(li)
      })
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderWallets()
    document.querySelector('.wallet-search')
      .addEventListener('input', e => renderWallets(e.target.value))
  })
  
  // === Управление модалкой ===
  window.showWalletRedirectModal = () =>
    document.getElementById('wallet-modal').classList.remove('hidden')
  window.closeWalletModal = () =>
    document.getElementById('wallet-modal').classList.add('hidden')
  
  // === Подключаем кнопку ===
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn')
    if (typeof window.ethereum === 'undefined') {
      btn.onclick = () => showWalletRedirectModal()
    }
  })
