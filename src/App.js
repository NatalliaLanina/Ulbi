import React, {useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'anna'},
    {id: 2, title: 'vvv', body: 'natallia'},
    {id: 3, title: 'ccc', body: 'bobo'},
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
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
