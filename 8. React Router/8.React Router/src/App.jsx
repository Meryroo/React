import MainLayout from './components/layout/Main-layout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import {Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'


function App() {
  

  return (
    <div className="App">
      <MainLayout>
        <Header>
        <NavBar/>
        </Header>
          <Outlet/>
        <Footer>
          <p>Powered by Neoland 2❤️23</p>
        </Footer>
      </MainLayout>
      
    </div>
  )
}

export default App
