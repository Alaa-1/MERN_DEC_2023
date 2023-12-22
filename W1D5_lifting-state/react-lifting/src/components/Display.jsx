import React from "react";

const Display = ({ posts }) => {
  // destructure posts from state
  // const { posts } = props;
  return (
    <ul>
      {posts.map((onePost, idx) => {
        return (
          <li key={idx}>
            <h3>{onePost.title}</h3>
            <p>{onePost.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Display;
