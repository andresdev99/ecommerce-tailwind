import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './index.css'
import { ShoppingProvider } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </React.StrictMode>,
)
