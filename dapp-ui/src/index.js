import { render } from 'react-dom'

import Fallback from './components/fallback'

;(() => {
  const app = document.querySelector('.app')

  if (!window.ethereum) {
    render(Fallback(), app)
    return
  }

  import('./init').then((module) => {
    module.default(app)
  })
})()
