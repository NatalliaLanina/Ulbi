import React, {useRef, useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'js 1', body: 'description 1'},
    {id: 2, title: 'js 2', body: 'description 2'},
    {id: 3, title: 'js 3', body: 'description 3'},
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }

  return (
    <div className="app">
      <form action="">
        <MyInput
          value={title}
          type="text"
          placeholder={'Title'}
          onChange={event => setTitle(event.target.value)}
        />
        <MyInput
          value={body}
          onChange={event => setBody(event.target.value)}
          className={'postInput'}
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} title={'Post list 1'} key={posts.id}/>
    </div>
  );
}

export default App;
