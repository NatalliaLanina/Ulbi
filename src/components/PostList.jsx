import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = (props) => {
  if (!props.posts.length) {
    return <h2>No posts</h2>
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <TransitionGroup>
        {props.posts.map(post =>
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <Post remove={props.removePost} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  );
};

export default PostList;