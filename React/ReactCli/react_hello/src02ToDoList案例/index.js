import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ROOT extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}
ReactDOM.render(<ROOT />, window.root)

