import React from 'react';

function Input(props){
    return(
        <textarea id="editor" onChange={props.eventFunc}>{props.value}</textarea>  
    )
}

export default Input;