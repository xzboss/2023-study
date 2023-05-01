import React, { } from 'react'
import Count from './containers/Count'
import store from './redux/store'
import { Provider } from 'react-redux'
export default function App () {
  return (
    <div>
      <Provider store={store}>
        <Count />
      </Provider>
    </div>
  )
}
