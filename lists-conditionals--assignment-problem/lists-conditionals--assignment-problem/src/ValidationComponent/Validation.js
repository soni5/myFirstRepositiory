import React from 'react'

const validation = (props)=>{
    let msg = 'Text long enough';
    if(props.textLenght<= 5 ){
        msg = 'Text too short'
    }
    return(
      <div>
          <p>{msg}</p>
      </div>

    );
};
export default validation;