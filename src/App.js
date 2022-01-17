import React, {useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'js 1', body: 'description 1'},
    {id: 2, title: 'js 2', body: 'description 2'},
    {id: 3, title: 'js 3', body: 'description 3'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      {posts.length !== 0
        ? <PostList removePost={removePost} posts={posts} title={'Post list 1'} key={posts.id}/>
        : <h2>No posts</h2>}
    </div>
  );
}

export default App;
