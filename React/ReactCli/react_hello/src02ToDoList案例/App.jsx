import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
class App extends React.Component {
  state = {
    data: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "学习", done: false }
    ]
  }
  addTodo = (todoObj) => {
    const data = this.state.data
    this.setState({ data: [todoObj, ...data] })
  }
  updateTodo = (id, done) => {
    const data = this.state.data
    const newData = data.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ data: newData })
  }
  deleteTodo = (id) => {
    let data = this.state.data
    const newData = data.filter(todoObj => { return todoObj.id !== id })
    this.setState({ data: newData })
  }
  checkAll = (done) => {
    const { data } = this.state
    const newData = data.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    this.setState({ data: newData })
  }
  clearAllDone = () => {
    const { data } = this.state
    const newData = data.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ data: newData })
  }
  render () {
    const { data } = this.state
    return (
      <div className="App">
        <Header addTodo={this.addTodo}></Header>
        <Main todos={data} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></Main>
        <Footer todos={data} checkAll={this.checkAll} clearAllDone={this.clearAllDone}></Footer>
      </div>
    )
  }
}

export default App;
