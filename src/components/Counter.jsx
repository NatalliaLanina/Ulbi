import React, {useState} from 'react';
import Post from "./Post";

const Counter = () => {
/*  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1)
  }
  let decrement = () => {
    setCount(count - 1)
  }*/

  return (
    <div>
      <Post post={{id: 1, title: 'js', body: 'description'}}/>
    </div>
  );
};

export default Counter;
{/* <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>*/
}