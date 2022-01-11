import React from 'react';

const Post = (props) => {

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title.toUpperCase()}</strong>
          <p>{props.post.body}</p>
        </div>
        <div className="post__btn">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;