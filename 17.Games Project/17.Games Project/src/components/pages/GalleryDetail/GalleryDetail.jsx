import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context";

const GalleryDetail = () => {
    const {characters} = useContext(UserContext)
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    const getDetail = () => {
        setDetail(characters.find((character) => character.id ==id))
        
    }

   useEffect(()=> {
    getDetail();
    console.log(detail.abilities)
   },[id])


    return (<main>
<img src={detail.image} alt={detail.name}/>
<h3>{detail.name}</h3>
<p>Species: {detail.species}</p>
<p>Height: {detail.heihgt} cm</p>
<p>Abilities: {detail.abilities[0]}</p>
    </main>)

}

export default GalleryDetail;