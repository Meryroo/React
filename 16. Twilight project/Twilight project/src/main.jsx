import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Gallery from './components/pages/Gallery/Gallery'
import GalleryDetail from './components/pages/GalleryDetail/GalleryDetail'
import Login from './components/pages/Login/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Gallery/:id" element={<GalleryDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
