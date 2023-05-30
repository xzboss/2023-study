import React, { } from 'react'

import { Provider } from 'react-redux'
import Count from './containers/Count'
import store from './redux/store'
import Person from './containers/Person'
export default function App () {
  return (
    <div>
      <Provider store={store}>
        <Count />
        <Person />
      </Provider>
    </div>
  )
}
