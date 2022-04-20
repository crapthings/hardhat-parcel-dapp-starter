const ethereum = window.ethereum

const store = createStore((set) => ({
  account: null,
  str: null,
  balance: 0,
}))

export async function connect () {
  ethereum.request({ method: 'eth_requestAccounts' })
}

export async function getAccount () {
  const [account] = await ethereum.request({ method: 'eth_accounts' })
  store.setState({ account })
}

export async function getStr () {
  const str = await App.Dapp.getStr()
  store.setState({ str })
}

export async function setStr (str) {
  await App.Dapp.setStr(str)
}

export async function getBalance (account) {
  const resp = await App.Provider.getBalance(account)
  const balance = ethers.utils.formatEther(resp)
  store.setState({ balance })
}

export default store
