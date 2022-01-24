import React, {useMemo, useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'anna'},
    {id: 2, title: 'vvv', body: 'natallia'},
    {id: 3, title: 'ccc', body: 'bob'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(search))
  }, [search, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <MyInput
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder='Search'
      />
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
        ? <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Post list 1'} key={posts.id}/>
        : <h2>No posts</h2>}
    </div>
  );
}

export default App;
