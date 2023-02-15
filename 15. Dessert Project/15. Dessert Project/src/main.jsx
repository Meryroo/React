import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/pages/Home/Home'
import Gallery from './components/pages/Gallery/Gallery'
import Login from './components/pages/Login/Login'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {UserContextProvider } from './components/context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
