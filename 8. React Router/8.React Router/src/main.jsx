import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Gallery from './components/pages/Gallery/Gallery'
import About from './components/pages/About/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element = {<App/>}>
        <Route path="/Home" element = {<Home/>}/>
        <Route path='/Gallery' element = {<Gallery/>}/>
        <Route path='/About' element ={<About/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
