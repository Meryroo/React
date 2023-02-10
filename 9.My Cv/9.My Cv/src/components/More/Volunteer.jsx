import "./Volunteer.css"
const Volunteer = ({volunteer}) => {
    return (
        <div className="volunteer-container">
            <h3>Volunteer</h3>
            {volunteer.map((item) =>{
                return (
                    <div key={JSON.stringify(item)}>
                    <p>{item.name}</p>
                    <p>{item.where}</p>
                    <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Volunteer;