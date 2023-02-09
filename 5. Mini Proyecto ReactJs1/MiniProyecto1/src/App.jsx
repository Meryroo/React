import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/layout/GalleryLayout/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import GalleryLayout from "./components/layout/GalleryLayout/GalleryLayout";
import CharacterCard from "./components/CharacterCard/CharacterCard";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character/");
    const data = res.data.results;
    setCharacters(data);
    setLoaded(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <GalleryLayout>
        <Header><h1>Rick & Morty Gallery</h1></Header>
        <Main>
        {characters.map((character) =>( character.status == "Alive" &&
        <CharacterCard character={character} key={character.id}></CharacterCard>
        ))}
        </Main>
        <Footer text="Powered by Neoland 2❤️23"/>
</GalleryLayout>
        
      
    </div>
  );
};

export default App;
