import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/contex";
import "./GalleryDetail.css" 
const GalleryDetail = () => {
const { id } = useParams();
const {characters} = useContext(UserContext)
const [detail, setDetail] = useState([])


const characterDetail = () => {
    setDetail(characters.find((character) => character.id == id))
}

useEffect(() => {
    characterDetail();
    
})

    return <main>
        <figure className="card-detail">
            <div className="image-detail">
            <img src={detail.image} alt={detail.name}/>
            </div>
            <span className="detail">
           <h2>{detail.name}</h2>
           <p>Countrie: {detail.origin}</p>
           <p>Age: {detail.age}</p>
           <p>{detail.species}</p>
           <figcaption>Description: {detail.description}</figcaption>
           </span>
        </figure>


       
       
       
    </main>
}

export default GalleryDetail;