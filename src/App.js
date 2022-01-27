import React, {useMemo, useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'anna'},
    {id: 2, title: 'vvv', body: 'natallia'},
    {id: 3, title: 'ccc', body: 'bob'},
    {id: 4, title: 'ddd', body: 'lena'},
    {id: 5, title: 'sss', body: 'mila'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Post list 1'} key={posts.id}/>
    </div>
  );
}

export default App;
