import React,{useState} from "react";
import "./App.css"


var emojiDictionary = 
{
  "😂":"Face Tears With Joy",
  "😘":"Face Blowing With Kiss",
  "😋":"Tasty Mouth",
  "🤔":"Thinking Face",
  "😴":"Sleepy Face",
  "🤮":"Vomit Face",
  "😲":"Astonished Face",
  "😢":"Crying Face",
  "😞":"Sad Face",
  "👿":"Angry Face"
}

var emojisInDataBase = Object.keys(emojiDictionary); 


function App() {

 

  var [meaning, setMeaning] = useState("")

  function emojiInputHandler(event)
  {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput]

    if(meaning === undefined)
    {
      meaning = "We dont have the emoji in our Database. We will add later"
    }

    setMeaning(meaning) 

  }

  function emojiClickHandler(emoji)
  {
    setMeaning(emojiDictionary[emoji])

  }





  return (
    <div className="App">
    <h1>Inside Ittt</h1>
    <input type="text" onChange={emojiInputHandler} placeholder="Search for your favourite emoji" style={{width:"80%",height:"2rem"}} />
    <h2>{meaning}</h2>
    <h3>Emojis we have in our Database.</h3>
    {
      emojisInDataBase.map(function (emoji){

        return <span key={emoji} style={{fontSize:"2rem", padding:"0.5rem", cursor:"pointer"}} onClick={()=>emojiClickHandler(emoji)}>{emoji}</span>


      })
    }

      
    </div>
  );
}

export default App;
