import "./Skills.css"
const Skills = ({skills}) => {
    return (
  
        <div className="habilities-container">
            <h3>Skills</h3>
            {skills.map((item) =>{
                return (
                        <p key={item}>{item}</p>
                )
            })}

        </div>  )
    
}
export default Skills;