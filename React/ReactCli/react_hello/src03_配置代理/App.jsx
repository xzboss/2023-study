import React from 'react';
import axios from 'axios'
class App extends React.Component {
  getStudent = () => {
    axios.get("http://localhost:3000/A/student").then(res => {
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
