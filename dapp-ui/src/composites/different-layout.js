import { Link } from 'react-router-dom'

export default function DifferentLayout () {
  const code = `export { default as layout } from '$c/blank'`

  return (
    <div className='grid h-screen place-content-center'>
      <div>different layout</div>
      <code>{code}</code>
      <Link to='/'>back</Link>
    </div>
  )
}

export { default as layout } from '$c/blank'
