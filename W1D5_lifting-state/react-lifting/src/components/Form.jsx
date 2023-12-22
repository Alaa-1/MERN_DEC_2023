import { useState } from "react";
const Form = ({ posts, setPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   const [error, setError] = useState("");

  // handle form input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !body) {
      //   setError("All field are required !");
      return;
    }
    const newPost = {
      title,
      body,
    };
    // updatePosts(newPost);
    setPost([...posts, newPost]);
    setTitle("");
    setBody("");
    // setError("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <p>{error}</p> */}
      {/* <p> {JSON.stringify(title)}</p>
        <p>{JSON.stringify(body)}</p> */}
      <input
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <textarea
        placeholder="Body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
        value={body}
      ></textarea>
      <button>Add Post</button>
    </form>
  );
};

export default Form;
