import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Route from 'router'
import store from 'store'
import './index.styl'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

serviceWorker.unregister()
