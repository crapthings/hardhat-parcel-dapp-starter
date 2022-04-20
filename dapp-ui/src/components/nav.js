import { Link } from 'react-router-dom'

import store, { connect } from '$s'

export default function Nav () {
  const account = store((state) => state.account)

  return (
    <div className='absolute space-x-2'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      {
        account
          ? <Link to='/'>{_.truncate(account, { length: 8 + 3 })}</Link>
          : <button className='btn btn-sm' onClick={connect}>connect to your wallet</button>
      }
    </div>
  )
}
