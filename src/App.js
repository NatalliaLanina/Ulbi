import React, {useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'js 1', body: 'description 1'},
    {id: 2, title: 'js 2', body: 'description 2'},
    {id: 3, title: 'js 3', body: 'description 3'},
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sort => setSelectedSort(sort)}
          defaultValue='Sort by'
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]}
        />
      </div>
      {posts.length
        ? <PostList removePost={removePost} posts={posts} title={'Post list 1'} key={posts.id}/>
        : <h2>No posts</h2>}
    </div>
  );
}

export default App;
