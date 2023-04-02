import React from 'react'

import './App.css'
import Search from './component/Search'
import List from './component/List'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Search />
        <List />
      </div>
    )
  }
}

export default App;
