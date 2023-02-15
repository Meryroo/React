import axios from "axios";
import { useEffect, useState} from "react";
import "./Gallery.css"

const Gallery = () => {
  const [food, setFood] = useState([]);
  const getDessert = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    );
    const data = await res.data.meals;
    setFood(data)
    
  };

 
  useEffect(() => {
    getDessert();
  }, [food]);
  return (
    
    <main className="gallery-main">
    
        {food.map((item) =>{
            return (
                <figure key={item.strMeal}>
                    <img src={item.strMealThumb} alt={item.strMeal}/>
                    <h3>{item.strMeal}</h3>
                    <p>{item.idMeal}</p>
                </figure>
            )
        })}
      
     
    </main>
    
  );
};

export default Gallery;
