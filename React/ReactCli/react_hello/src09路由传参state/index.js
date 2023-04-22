import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
class ROOT extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}
ReactDOM.render(
  <BrowserRouter>
    <ROOT />
  </BrowserRouter>
  , window.root)

