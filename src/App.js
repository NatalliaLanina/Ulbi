import React, {useEffect, useState} from "react";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false)
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };


  return (
    <div className="app">
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
        ? <Loader/>
        : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Post list 1'} key={posts.id}/>
      }
    </div>
  )
}

export default App;
