import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    }
    props.create(newPost)
    setPost({title: '', body: ''});
  }

  return (
    <form action="">
      <MyInput
        value={post.title}
        type="text"
        placeholder={'Title'}
        onChange={event => setPost({...post, title: event.target.value})}
      />
      <MyInput
        value={post.body}
        onChange={event => setPost({...post, body: event.target.value})}
        className={'postInput'}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;