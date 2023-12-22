import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const postsList = [
    {
      title: "Neural Interface",
      body: "Use the open-source TCP circuit, then you can program the open-source array!",
      read: true,
    },
    {
      title: "Cross-Platform Capacitor",
      body: "We need to back up the open-source FTP application!",
      read: false,
    },
    {
      title: "Haptic Panel",
      body: "You can't transmit the pixel without copying the online OCR capacitor!",
      read: false,
    },
  ];
  const [posts, setPost] = useState(postsList);

  // const updatePosts = (newPost) => {
  //   // console.log(newPost);
  //   setPost([...posts, newPost]);
  // };
  // delete a post
  const deletePost = (postId) => {
    console.log("before", posts);
    const updatedPosts = posts.filter((onePost, i) => {
      return i !== postId;
    });
    console.log("after", updatedPosts);
    setPost(updatedPosts);
  };
  // check read post
  const readPost = (postId) => {
    // console.log(postId);
    // create a copy from posts
    const copyPosts = [...posts];
    // console.log(copyPosts[postId]);
    copyPosts[postId].read = !copyPosts[postId].read;
    setPost(copyPosts);
  };
  return (
    <div className="App">
      <h1>Lifting State 🏋️</h1>
      {posts.length > 0 ? (
        <h4>{posts.length} post found 🚀</h4>
      ) : (
        <h4>Nothing Here 😴</h4>
      )}
      <Form setPost={setPost} posts={posts} />
      {/* {JSON.stringify(posts)} */}
      <Display posts={posts} deletePost={deletePost} readPost={readPost} />
    </div>
  );
}

export default App;
