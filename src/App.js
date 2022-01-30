import React, {useState} from "react";
import "./styles.css";
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';

var shortcuts = {
  /* general windows shortcuts */
  "Copy" : "ctrl + C",
  "Paste" : "ctrl + V",
  "Save" : "ctrl + S",
  "Undo" : "ctrl + Z",
  "Redo" : "ctrl + Y",
  "Run" : "windows + R",
  "Find window/app" : "ctrl + F",
  "Minimise all windows" : "windows + D",
  "Window tab move" : "alt + tab",
  "Application tab move" : "ctrl + tab",
  "Reverse application tab move" : "shift + ctrl + tab",

  /* VS code shortcuts */
  "Go back" : "alt + left arrow",
  "Go forward" : "alt + right arrow",
  "Find in all files" : "ctrl + shift + F",
  "Comment" : "ctrl + K + C",
  "Uncomment" : "ctrl + K + U",
  "Comment Toggle" : "ctrl + /",
  "Duplicate line above" : "alt + shift + up arrow",
  "Duplicate line below" : "alt + shift + down arrow",
  "Refractor" : "ctrl + shift + R",
  "Rename" : "F2",
  "Goto definition" : "F12",
  "Multi-cursor" : "ctrl + D",
  "Quick find files" : "ctrl + P"
};

var shortcutsKeys = Object.keys(shortcuts);


function App() {
  const [userInputMeaning, shortcutMeaning] = useState("");

  function shortcutInput(e){
    var Input = e.target.value;
    var meaning = shortcuts[Input];
    if(meaning == undefined){
      meaning = "Not found in our database";
    }

    shortcutMeaning(meaning);
  }

  function shortcutClickHandler(shortcut){
    var meaning = shortcuts[shortcut];
    shortcutMeaning(meaning);
  }

  return (
    <div className="App">
      <body>
      <h2>SHORTCUT GENERATOR</h2>
      <h3>
        for Developers
      </h3>

      <input onChange={shortcutInput} />
      <h3>{userInputMeaning}</h3>
      <h3>What we know</h3>

{shortcutsKeys.map(function(keys){
  return (
    <button class="button-30" role="button" onClick={
      () => shortcutClickHandler(keys)}>
      {keys}
    </button>
  )
})}
      </body>
    </div>
  );
}

export default App;

