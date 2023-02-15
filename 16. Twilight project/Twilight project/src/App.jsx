
import './App.css'
import NavBar from './components/NavBar/NavBar'
import LayoutMain from './components/Layout/LayoutMain'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {  

  return (
    <div className="App">
      <LayoutMain>
<Header>
<NavBar></NavBar>
</Header>
<Outlet/>
<Footer></Footer>


      </LayoutMain>
    </div>
  )
}

export default App
