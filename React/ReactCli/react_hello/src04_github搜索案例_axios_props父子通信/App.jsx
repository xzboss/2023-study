import React from 'react'

import './App.css'
import Search from './component/Search'
import List from './component/List'
class App extends React.Component {
  state = {
    data: [],
    isFirst: true,
    isLoading: false,
    isError: false
  }
  getUsers = (data) => {
    this.setState({ data })
  }
  updateState = (stateObj) => {
    this.setState({ ...stateObj })
  }
  render () {
    return (
      <div className="App">
        <Search getUsers={this.getUsers} updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}

export default App;
