import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { UserContextProvider } from './components/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
