import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
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
const root = createRoot(document.getElementById('root'))
root.render(<BrowserRouter><ROOT /></BrowserRouter>)

