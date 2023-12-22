import React from "react";

const Display = ({ posts, deletePost, readPost }) => {
  // const { posts } = props;

  return (
    <ul>
      {posts.map((onePost, idx) => {
        return (
          <li key={idx}>
            <button onClick={() => deletePost(idx)}>Delete</button>
            <h3>
              {onePost.title} <span>{onePost.read && "✅"}</span>
            </h3>
            <p>{onePost.body}</p>
            <hr />
            <input
              type="checkbox"
              onChange={(e) => {
                readPost(idx);
              }}
              checked={onePost.read}
            />
            <label>Read</label>
          </li>
        );
      })}
    </ul>
  );
};

export default Display;
