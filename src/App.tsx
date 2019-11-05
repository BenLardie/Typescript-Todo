import React, {useState} from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input type='text' required />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  );
}

export default App;
