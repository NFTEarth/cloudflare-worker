// Configure UI on checkout modal
// https://docs.unlock-protocol.com/unlock/developers/paywall/configuring-checkout
export const paywallConfig = {
  locks: {
    '0x90BAa8714AfC2089ed4c9afB21707fEA6FC82157': {
      network: 10,
    },
  },
  pessimistic: true,
}

// Enter RPC providers
export const providers = {
  1: '',
  4: 'https://opt-mainnet.g.alchemy.com/v2/SZGF3X-GuiXsq75KGa8DZOtJiOuPkTdx',
  100: '',
  10: '',
  // ...
}

// (in seconds) Forces re-authentication after maxSignatureTime
export const maxSignatureTime = 60 * 60 * 24 // 1 day
