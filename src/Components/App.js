import React, {useState} from 'react';
import Input from './Input';
import Preview from './Preview';

function App(){
    let defaultText = "# Hello World ⛄️\n> This is a simple markdown previewer\n## Type some markdown\n[links](https://www.freecodecamp.com)\n`// Inline code block`"
    const [input,setInput] = useState(defaultText);

    // Handle event function
    function handleChange(event){
        setInput(event.target.value);
    }

    return(
        <div id="container">
            <h1>Markdown Previewer</h1>
            <div>
                <Input eventFunc={handleChange} value={input}/>
                <Preview input={input}/>
            </div>
        </div>
    )
}

export default App;