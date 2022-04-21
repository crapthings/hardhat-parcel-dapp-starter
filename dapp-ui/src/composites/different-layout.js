import { Link } from 'react-router-dom'

import { Dialog } from '@headlessui/react'

const localStore = createStore(() => ({
  open: false
}))

export default function DifferentLayout () {
  const code = `export { default as layout } from '$c/blank'`

  return (
    <div className='grid h-screen place-content-center'>
      <div>different layout</div>
      <code>{code}</code>
      <Link to='/'>back</Link>
      <button onClick={() => modalStore.setState({ open: true })}>open dialog</button>
      <Modal />
    </div>
  )
}

export { default as layout } from '$c/blank'

const modalStore = createStore(() => ({
  open: false
}))

const close = () => modalStore.setState({ open: false })

function Modal () {
  const open = modalStore(state => state.open)

  return (
    <Dialog open={open} onClose={close} className='overflow-y-auto fixed z-50 inset-0 grid place-content-center'>
      <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

      <div className='relative p-4 space-y-4 bg-white'>
        <Dialog.Title>Deactivate account</Dialog.Title>

        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>

        <div className='space-x-4'>
          <button className='btn btn-sm' onClick={close}>Deactivate</button>
          <button className='btn btn-sm' onClick={close}>Cancel</button>
        </div>
      </div>

    </Dialog>
  )
}
