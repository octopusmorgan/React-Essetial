import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary,setSecondary] =useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here! `);
  },[emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here! `);
  },[secondary]);

  return(
      <>
        <h1>Current emotion is {emotion} and {secondary}</h1>
        <button onClick={() => setEmotion("happy")}>Make happy</button>
        <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
        <button onClick={() => setEmotion("frustated")}>Frustated</button>
        <button onClick={()=> setEmotion("enthusuastic")}>Enthuse</button>
      </>
    );
}

export default App;
