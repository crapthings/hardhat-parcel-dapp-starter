const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('test contracts', function () {
  let dapp

  describe('deploy dapp contract', function () {

    it('get string', async function () {
      const Dapp = await ethers.getContractFactory('Dapp')
      dapp = await Dapp.deploy()
      await dapp.deployed()
      expect(dapp.address).to.be.a('string')
    })

    it('getStr is equal to Hardhat Parcel Dapp Starter', async function () {
      const str = await dapp.getStr()
      expect(str).to.equal('Hardhat Parcel Dapp Starter')
    })

    it('setStr to be emit event', async function () {
      await expect(dapp.setStr('hello solidity')).to.emit(dapp, 'changeStr').withArgs('hello solidity')
    })

  })

})
