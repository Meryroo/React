import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CardDetail from './components/CarDetail/CarDetail';
import './App.css'
import { useDebounce } from 'use-debounce';

const App = () => {
 const [pokemonName, setPokemonName] = useState("");
 const [pokemonChosen, setPokemonChosen] = useState(false);
 const [debounceValue] = useDebounce(pokemonName, 1000)
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
  axios.get(`https://pokeapi.co/api/v2/pokemon/${debounceValue}`).then((res) =>{
   console.log(res.data)
    setPokemon({
      
      name:pokemonName,
      number: res.data.id,
      image: res.data.sprites.other.dream_world.front_default,
      hp: res.data.stats[0].base_stat,
      attack: res.data.stats[1].base_stat,
      defense: res.data.stats[2].base_stat,
      speed: res.data.stats[5].bases_stat,
      type: res.data.types,
      abilities: res.data.abilityes,
      base_experience: res.data.base_experience,
      height: res.data.height * 10,
      weight: res.data.weight / 10,


    });
    setPokemonChosen(true)
    
    
  })

 };

 useEffect(() => {
   
 searchPokemon()
   
 }, [debounceValue])
 

  return (
    <div className="App">
       <Header>
      <div className='TitleSection'>
        <h1>Pokédex</h1>
        <input type="text" onChange={(ev) => {
          setPokemonName(ev.target.value)
        }} value={pokemonName.toLowerCase()}/>
        <div>
          </div>
      </div>
      </Header>
      <Main>
      <div className='DisplaySection'>
        {!pokemonChosen? (<h1>Please choose a Pokémon</h1>) : (
          <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name}/>
          <h3>Number: #{pokemon.number}</h3>
          
          </>
        )}
      </div>
      <CardDetail pokemon={pokemon}/>
      </Main>
      <Footer>
        <p>Powered by Neoland 2❤️23</p>
      </Footer>
    </div>
    
  )
}

export default App
