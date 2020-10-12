import React from 'react';


const charComponent = (props) =>{
     const Style = {
        display : 'inline-block' ,
        border : '5px soild black',
        padding : '16px',
        textAlign : 'center',
        margin : '16px' ,
        
    };
    return(
        <div style = {Style}>
        <p onClick = {props.clicked}>{props.char}</p>
        </div>
    );
    
};
export default charComponent;