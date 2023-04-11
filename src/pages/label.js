import { useState } from 'react';

export function LabelTextButton() {
  const [label, setLabel] = useState("Label value");
  const [text, setText] = useState("");

  function handleClick() {
    console.log('text is: ' + text);
    console.log('label is: ' + label);
    setLabel(text);
    setText('');
  }

  return (
    <div>
      <Label value={label}/><br/>
      <TextInput value={text}
        inputHandler={(e) => setText(e.target.value)}/><br/>
      <Button clickHandler={() => handleClick()}/>
    </div>
  );
}

function Label({value}) {
  return (
    <label>{value}</label>
  );
}

function TextInput({value, inputHandler}) {
  return (
    <input type="text" value={value}
      onChange={inputHandler}/>
  );
}

function Button({clickHandler}) {
  return (
    <button onClick={clickHandler}>
      Click me
    </button>
  );
}
