import React, {useState} from "react";
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
  const [title, setTitle] = useState('none')
  const addNewPost = () => {
    
  }
  
  return (
    <div className="app">
      <form action="">
        <MyInput value={title} type="text" placeholder={'Title'}/>
        <textarea className={'postInput'}/>
        <MyButton>Add post</MyButton>
      </form>
      <PostList posts={posts} title={'Post list 1'} key={posts.id}/>
    </div>
  );
}

export default App;
