import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx"
import Gallery from "./components/pages/Gallery/Gallery";

function App() {
  return (
    
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Outlet />
        <Footer></Footer>
      </Layout>
    
  );
}

export default App;
