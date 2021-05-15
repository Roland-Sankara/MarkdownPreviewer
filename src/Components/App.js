import React, {useState} from 'react';
import Input from './Input';
import Preview from './Preview';

function App(){
    let defaultText = "# Hello World ⛄️\n> This is a simple markdown previewer\n## Type some markdown\n[link text](https://www.freecodecamp.com)\n\n`// Inline code block`\n```\n Multiple lines of code\n```\n* List item one\n\n![Image](https://cdn2.hubspot.net/hubfs/53/html-css-javascript.jpg)\n\n**Bold Text**"
    const [input,setInput] = useState(defaultText);

    // Handle event function
    function handleChange(event){
        setInput(event.target.value);
    }

    return(
        <div id="container">
            <h1>Markdown Previewer</h1>
            <div id="label">
                <h3>Editor</h3>
                <h3>Previewer</h3>
            </div>
            <div id="elem">
                <Input eventFunc={handleChange} value={input}/>
                <Preview input={input}/>
            </div>
        </div>
    )
}

export default App;