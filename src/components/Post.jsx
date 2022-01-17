import React from 'react';
import MyButton from "./UI/button/MyButton";

const Post = (props) => {

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title.toUpperCase()}</strong>
          <p>{props.post.body}</p>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Post;