import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('some text');

  let increment = () => {
    setLikes(likes + 1)
  }
  let decrement = () => {
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>{likes}</h1>
      <h2>Add text: {value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value) }
      />
    </div>
  );
}

export default App;
