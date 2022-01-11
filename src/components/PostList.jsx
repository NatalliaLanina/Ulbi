import React from 'react';
import Post from "./Post";

const PostList = (props) => {
  return (
    <div>
      <h1>Post list</h1>

      {props.posts.map(post =>
        <Post post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostList;