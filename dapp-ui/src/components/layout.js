import { Outlet } from 'react-router-dom'

import Nav from './nav'

export default function Layout ({ children }) {
  return (
    <>
      <Nav />
      {children ? children : <Outlet />}
    </>
  )
}
