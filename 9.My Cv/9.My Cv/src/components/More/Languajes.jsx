import "./Languages.css"

const Languages = ({languages}) => {
    return <div className="languages-container">
        <h3>Languages</h3>
        <p>{languages.language}</p>
        <p>✏️Writing:{languages.wrlevel}</p>
        <p>💬Speaking: {languages.splevel}</p>
    </div>
}
export default Languages;