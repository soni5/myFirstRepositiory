import React from 'react'
import './UserOutput.css';
const userOutput = (props) => {
    return(
        <div className= 'UserOutput'>
            <p>Hi how are you {props.para1}</p>
            <p> username is {props.username}</p>
        </div>
    )
}

export default userOutput;