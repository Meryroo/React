import "./Gallery.css";
import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import CharacterCard from "../../CharacterCard/CharacterCard";
import axios from "axios";
import { UserContext } from "../../context/contex";

const Gallery = () => {

    
const {characters, setCharacters} = useContext(UserContext);
  const [filterCharacters, setFilterCharacters] = useState([]);

  const getCharacters = async () => {
    
    const res = await axios.get(
      "https://63ecef7bbe929df00cb5889b.mockapi.io/characters"
    );
    const data = res.data;
    setCharacters(data);
    setFilterCharacters(data);
  };

  const filteredCharacters = (keyword) => {
    const filter = characters.filter(
      (character) =>
        character.name.toLowerCase().includes(keyword.toLowerCase()) ||
        character.species.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilterCharacters(filter);
  };

  useEffect(() => {
    getCharacters();
  }, []);

   const getDetailCharacters = (id) => {
    return characters.find((character) => character.id.toString() == id)
    
}

  return (
    <main>
      <div className="search-div">
        <span className="buttons">
        <button onClick={() =>{
            const human = characters.filter((character) => character.species == "Human")
            setFilterCharacters(human)
        }}>Human</button>
        <button onClick={() => {
            const vampire = characters.filter((character) => character.species == "Vampire")
            setFilterCharacters(vampire)
        }}>Vampire</button>
        <button onClick={() => {
           const lycanthrope = characters.filter ((character) => character.species == "Lycanthrope")
            setFilterCharacters(lycanthrope)
        }}>Lycanthrope</button>
        </span>
        <input
          type="text"
          placeholder="Search"
          onChange={(ev) => {
            filteredCharacters(ev.target.value);
          }}
        />
      </div>

      <div className="character-figure">
        {filterCharacters.map((character) => {
          return <CharacterCard character={character} key={character.id} />;
        })}
      </div>
    </main>
  );




};

export default Gallery;

