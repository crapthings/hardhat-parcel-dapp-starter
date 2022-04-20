import { Link } from 'react-router-dom'

import store, { connect } from '$s'

export default function Nav () {
  const account = store((state) => state.account)

  return (
    <div className='fixed z-50 top-0 flex items-center w-full h-12 px-4 space-x-4 text-white bg-blue-900'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to={`/page/${_.random(999)}`}>page</Link>
      <Link to='/different-layout'>different layout</Link>
      <div className='flex-1'></div>
      {
        account
          ? <Link to='/'>{_.truncate(account, { length: 8 + 3 })}</Link>
          : <button className='btn btn-sm' onClick={connect}>connect to your wallet</button>
      }
    </div>
  )
}
