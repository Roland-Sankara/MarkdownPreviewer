import React from 'react';
import marked from 'marked';



function Preview(props){
    function getMarkedText(){
        marked.setOptions({
            breaks:true
        });
        
        const markedText = marked(props.input,{sanitize:true});
        return {__html:markedText};
    }
    return(
        <div id="preview" dangerouslySetInnerHTML={getMarkedText()}/>
    )
}

export default Preview;