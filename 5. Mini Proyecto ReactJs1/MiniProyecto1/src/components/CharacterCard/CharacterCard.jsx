import "./CharacterCard.css"

const CharacterCard = ({character}) => {
    return <figure className="charactercard">
    <div className="title">
    <h3>{character.id}</h3>
    <h2>{character.name}</h2>
    </div>
    <img src={character.image} alt={character.name}/>
    <div className="subtitle">
    <p>{character.status}</p>
    <p>{character.origin.name}</p>
    </div>
    </figure>}

export default CharacterCard;