import { useContext} from "react";
import { UserContext } from "../../context";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Gallery.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Gallery = () =>{
const {characters, setCharacters} = useContext(UserContext)
const [filteredCharacters, setFilteredCharacters] = useState([])
const {id} = useParams();
    const getCharacters = async () => {
        const res = await axios.get("https://63f11a49ff1b45a1a447ebb2.mockapi.io/characters")
        const data = await res.data;
        setCharacters(data);
        setFilteredCharacters(data)
        localStorage.setItem("characters",(data))
        
    }

    const filterCharacters = (keyword) => {
        const filterChar = characters.filter((character) => character.name.toLowerCase().includes(keyword.toLowerCase()) || character.species.toLowerCase().includes(keyword.toLowerCase()))
        setFilteredCharacters(filterChar)
    }
useEffect(()=>{
    getCharacters();
    
}, [])


    return <main className="gallery-input">
        <div className="search-bar">
            <span>
                <a href="/Home"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675439655/flecha-izquierda_kuak2y.png"/>Back</a>
                <button onClick={() => {
                    setFilteredCharacters(characters)
                }}>All</button>
        <button onClick={() =>{
            const heroes = characters.filter((character) =>
                character.types == "Heroe")
            setFilteredCharacters(heroes)
        }}>Heroes</button>
        <button onClick={() => {
            const villanos = characters.filter((character) => character.types == "Villano")
            setFilteredCharacters(villanos)
        }}>Villains</button>
        </span>
        <input type="text" onChangeCapture={(ev) => {
            filterCharacters(ev.target.value);
        }}></input>
        
        </div>
        <div className="gallery-container">
        {filteredCharacters.map((character) => {
            return(
<figure key={character.name}>
    <img src={character.image} alt={character.name}/>
    <h3>{character.name}</h3>
    <p>Species: {character.species}</p>
    <Link to={`/gallery/${character.id}`}>View Detail</Link>
</figure>
            ) 
            
        })}

       </div>
    </main>
}

export default Gallery;
