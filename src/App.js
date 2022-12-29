import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([1,2,3])

  function getSum(arr) {
  let sum = 0;

  for (const elem of arr) {
    sum += elem
  }
  return sum
  }

  function changeHandler(index, event) {
    setNotes([...notes.slice(0, index), +event.target.value, ...notes.slice(index + 1)])
  }
  
 

  return (
    <div className="App">
      <input value={notes[0]} onChange={(event) => changeHandler(0, event)}/> <br />
      <input value={notes[1]} onChange={(event) => changeHandler(1, event)} /> <br />
      <input value={notes[2]} onChange={(event) => changeHandler(2, event)}/> <br />
      {getSum(notes)}
      

    </div>
  );
}

export default App;
