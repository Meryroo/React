import "./GalleryDetail.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context";

const GalleryDetail =  () => {
    const {id} = useParams()
    const [detail, setDetail] = useState([])
   const {characters} = useContext(UserContext);
   const abilities = characters.abilities;
   console.log(characters)

   const getDetail = () => {
    setDetail(characters.find((character) => character.id == id))
   }
  
   useEffect(() => {
    getDetail()
    
   },[])
    return (<main className="detail-container">
        
<figure className="card-detail">
<div className="detail-img">
    <img src={detail.image} alt={detail.name}/>
    </div>
    <div className="detail-rest">
    <h2>{detail.name}</h2>
    <p><strong>Species: </strong>{detail.species}</p>
    <p><strong>Height: </strong>{detail.heihgt} cm</p>
    <p><strong>Abilitie:</strong> {detail.abilities}</p>
    <p><strong>Description:</strong> {detail.description}</p>
    </div>
    
</figure>
    </main>)

}

export default GalleryDetail;