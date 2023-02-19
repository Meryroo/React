
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Gallery from "./components/pages/Gallery/Gallery";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import ProtectecRoute from "./components/ProtectecRoute";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GalleryDetail from "./components/pages/GalleryDetail/GalleryDetail";

import "./App.css";

const App = () => {
  return (
      <div className="App">
      <Layout>
      <Header>
        <NavBar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={
         <ProtectecRoute>
        <Gallery />
        </ProtectecRoute>} />
        <Route path="/gallery/:id" element={
          <ProtectecRoute>
            <GalleryDetail/>          </ProtectecRoute>
        }/>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectecRoute>
              <Profile />
            </ProtectecRoute>
          }
        />
      </Routes>
      <Footer></Footer>
      </Layout>
      
    </div>
    
  );
};

export default App;
