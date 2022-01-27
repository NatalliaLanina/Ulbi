import React from 'react';
import Post from "./Post";

const PostList = (props) => {
  if (!props.posts.length) {
    return <h2>No posts</h2>
  }

  return (
    <div>
      <h1>{props.title}</h1>
      {props.posts.map(post =>
        <Post remove={props.removePost} post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostList;