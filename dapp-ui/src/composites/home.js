import { ethers } from "ethers"

import store, { getStr, setStr, getBalance } from '$s'

export default function Index () {
  const account = store((state) => state.account)
  const str = store((state) => state.str)

  useEffect(() => {
    getStr()
  }, [])

  const onClick = () => {
    const pmt = prompt('input text')
    if (!pmt) return
    setStr(pmt)
  }

  return (
    <div className='grid h-screen place-content-center'>
      <div>{str}</div>

      <Info />

      <div>
        <button className='btn btn-sm' onClick={onClick}>call setStr</button>
      </div>
    </div>
  )
}

function Info () {
  const account = store((state) => state.account)
  const balance = store((state) => state.balance)

  useEffect(() => {
    if (!account) return
    getBalance(account)
  }, [account])

  return (
    <div>
      <div>balance: {balance}</div>
    </div>
  )
}
