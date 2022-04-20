import './global'

import { render } from 'react-dom'

import contractAddrs from '../static/contracts.json'
import * as contracts from '../static/abi/**/*.json'

import { getAccount } from '$s'

export default async function Render (app) {
  const Provider = new ethers.providers.Web3Provider(ethereum, 'any')

  const Signer = Provider.getSigner()

  for (const contractName in contracts) {
    App[contractName] = new ethers.Contract(contractAddrs[contractName], contracts[contractName].abi, Signer)
  }

  App['Provider'] = Provider
  App['Signer'] = Signer

  Provider.on('network', (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      reloadPage()
    }
  })

  ethereum.on('accountsChanged', reloadPage)
  ethereum.on('chainChanged', reloadPage)

  getAccount()

  console.log(App)

  import('./router').then((module) => {
    render(module.default(), app)
  })
}

function reloadPage () {
  window.location.reload()
}
