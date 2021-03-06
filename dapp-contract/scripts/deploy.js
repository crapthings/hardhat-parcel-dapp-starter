const fs = require('fs')
const path = require('path')

const { ethers } = require('hardhat')

const CONTRACTS_BASE_PATH = `${process.cwd()}/dapp-contract/artifacts/contracts`
const CONTRACTS_ABI_PATH = `${process.cwd()}/dapp-ui/static/abi`

async function main () {
  const [owner, user1, user2, user3, ...accounts] = await ethers.getSigners()

  const Dapp = await ethers.getContractFactory('Dapp')
  const dapp = await Dapp.deploy()

  await dapp.deployed()

  console.log('your dapp address:', dapp.address)

  const contractsAddr = JSON.stringify({
    Dapp: dapp.address
  }, null, 2)

  fs.writeFileSync(`${process.cwd()}/dapp-ui/static/contracts.json`, contractsAddr)

  for (const folderName of fs.readdirSync(CONTRACTS_BASE_PATH)) {
    if (folderName === '.DS_Store') continue
    for (const filename of fs.readdirSync(path.join(CONTRACTS_BASE_PATH, folderName))) {
      if (/\.dbg/.test(filename)) continue
      if (filename === '.DS_Store') continue
      const src = path.join(CONTRACTS_BASE_PATH, folderName, filename)
      const dest = path.join(CONTRACTS_ABI_PATH, filename)
      fs.copyFileSync(src, dest)
      console.log('copy', src, dest)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
