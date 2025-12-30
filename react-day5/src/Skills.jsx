import { useState } from "react";
function Skills(){

    const [skills, setSkills] = useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked); // in terminal
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else {
            setSkills([skills.filter((item)=>item!=event.target.value)])

        }
    }
    return( 
        <div>
            <h3>Select Your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="html" value="html"/>
            <label htmlFor="html">HTML</label>
            <br/>
            <br/>

            <input onChange={handleSkills}  type="checkbox" id="css" value="css"/>
            <label htmlFor="css">CSS</label>
             <br/>
             <br/>

            <input onChange={handleSkills}  type="checkbox" id="sql" value="sql"/>
            <label htmlFor="sql">SQL</label>
             <br/>
             <br/>

            <input onChange={handleSkills} type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
             <br/>
             <br/>

            <input onChange={handleSkills} type="checkbox" id="mongo" value="mongo"/>
            <label htmlFor="mongo">MongoDB</label>
             <br/>
             <br/>

            <input onChange={handleSkills} type="checkbox" id="react" value="react"/>
            <label htmlFor="react">React</label>
            <h3>{skills.toString()}</h3>
           
        </div>

        
    )
}

export default Skills;