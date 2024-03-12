import { useState } from "react"

export default function (){
    const [team , countTeam] = useState(11);
    const teamStyle ={
         border : '5px solid purple',
         padding : '10px',
         margin : '10px',
         borderRadius : '29px',
    }
    const handleAdd = () => {
        const newTeam =team +1;
        countTeam(newTeam);
    }
    const handleRemove = () => {
        
        countTeam(team-1);
    }
    return (
        <div style={teamStyle} >
            <h3>players : {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}