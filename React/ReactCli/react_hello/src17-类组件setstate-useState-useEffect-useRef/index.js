import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
class ROOT extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}
export const root = createRoot(document.getElementById('root'))
root.render(<ROOT />)

