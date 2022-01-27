import React, {useState} from 'react';
import Post from "./Post";

const Counter = () => {

  return (
    <div>
      <Post post={{id: 1, title: 'js', body: 'description'}}/>
    </div>
  );
};

export default Counter;
