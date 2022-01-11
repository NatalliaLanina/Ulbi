import React, {useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'js 1', body: 'description 1'},
    {id: 2, title: 'js 2', body: 'description 2'},
    {id: 3, title: 'js 3', body: 'description 3'},
    {id: 4, title: 'js 4', body: 'description 4'},
    {id: 5, title: 'js 5', body: 'description 5'},
  ])

  return (
    <div className="app">
      <PostList posts={posts} key={posts.id}/>
    </div>
  );
}

export default App;
