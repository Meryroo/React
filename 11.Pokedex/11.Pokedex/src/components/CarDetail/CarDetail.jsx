const CardDetail = ({pokemon}) => {
    
    console.log(pokemon)
    return (<figure className="card-detail">
    <h1>{pokemon.name}</h1>
    <img src={pokemon.image} alt={pokemon.name}/>
    <p>Number: #{pokemon.number}</p>
    <p>Hp: {pokemon.hp}</p>
    <p>Attack: {pokemon.attack}</p>
    <p>Defense: {pokemon.defense}</p>
    <p>Speed: {pokemon.defense}</p>
   



    </figure>
)}

export default CardDetail;