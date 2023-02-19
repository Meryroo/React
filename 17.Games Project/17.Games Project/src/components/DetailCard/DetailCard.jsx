const DetailCard = (item) => {
    return <figure>
<img src={item.image} alt={item.name}/>
<h3>{item.name}</h3>

    </figure>
}