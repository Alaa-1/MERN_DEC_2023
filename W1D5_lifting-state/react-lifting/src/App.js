import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  // List of posts objects
  const postsList = [
    {
      title: "Neural Interface",
      body: "Use the open-source TCP circuit, then you can program the open-source array!",
    },
    {
      title: "Cross-Platform Capacitor",
      body: "We need to back up the open-source FTP application!",
    },
    {
      title: "Haptic Panel",
      body: "You can't transmit the pixel without copying the online OCR capacitor!",
    },
  ];
  // posts state
  const [posts, setPost] = useState(postsList);

  return (
    <div className="App">
      <h1>Lifting State 🏋️</h1>
      {posts.length > 0 ? (
        <h4>{posts.length} post found 🚀</h4>
      ) : (
        <h4>Nothing Here 😴</h4>
      )}
      <Form setPost={setPost} posts={posts} />
      <Display posts={posts} />
    </div>
  );
}

export default App;
