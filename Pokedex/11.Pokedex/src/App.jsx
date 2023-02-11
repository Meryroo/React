import { useState } from 'react'
import axios from 'axios';
import Header from './components/Header/Header';
import './App.css'

const App = () => {
 const [pokemonName, setPokemonName] = useState("");
 const [pokemonChosen, setPokemonChosen] = useState(false);
 const [pokemon, setPokemon] = useState({
  name: "",
  number:"",
  species:"",
  image:"",
  hp:"",
  attack:"",
  defense:"",
  speed:"",
  type:"",
 });

 const searchPokemon = () =>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>{
    setPokemon({
      name:pokemonName,
      number: res.data.id,
      species: res.data.species.name,
      image: res.data.sprites.other.dream_world.front_default,
      hp: res.data.stats[0].base_stat,
      attack: res.data.stats[1].base_stat,
      defense: res.data.stats[2].base_stat,
      speed: res.data.stats[5].bases_stat,
      type: res.data.types[0].type.name,

    });
    setPokemonChosen(true)
  })
 };
console.log(pokemonName)
  return (
    <div className="App">
       <Header>
      <div className='TitleSection'>
        <h1>Pokédex</h1>
        <input type="text" onChange={(ev) => {
          setPokemonName(ev.target.value)
        }} value={pokemonName.toLowerCase()}/>
        <div>
        {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
        </div>
      </div>
      </Header>
      <div className='DisplaySection'>
        {!pokemonChosen? (<h1>Please choose a Pokémon</h1>) : (
          <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name}/>
          <h3>Number: #{pokemon.number}</h3>
          <h3>Species: #{pokemon.species}</h3>
          <h3>Type: #{pokemon.type}</h3>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
          </>
        )}
      </div>
    </div>
    
  )
}

export default App
