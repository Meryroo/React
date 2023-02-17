import { Link } from "react-router-dom";

const CharacterCard = ({character}) => {
    return (
        <figure > 
            <img src={character.image} alt={character.name}/>
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <Link to={`/Gallery/${character.id}`}>View Detail</Link>
        </figure>
    )
}

export default CharacterCard;