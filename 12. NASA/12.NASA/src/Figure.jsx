import "./Figure.css"
const Figure = ({data}) => {
return (
    <figure className="container">
        <img src={data.url} alt={data.title}/>
        <div className="window">
            <div>
                <h1>{data.title}</h1>
            </div>
            <div className="detail-bar">
                <span>{data.date}</span>
                <span>{data.copyright}</span>
            </div>
            <div className="window-pane">{data.explanation}</div>
        </div>
    </figure>
)
}

export default Figure;