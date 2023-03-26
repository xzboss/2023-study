import React from 'react';
import axios from 'axios'
import './App.css'
class App extends React.Component {
  state = {}
  getStudent = () => {
    axios.get("http://localhost:3000/student").then((res) => {
      console.log(res.data);
    })
  }
  render () {
    return (
      <div className="App">
        <button onClick={this.getStudent}>get student!</button>
      </div>
    )
  }
}

export default App;
