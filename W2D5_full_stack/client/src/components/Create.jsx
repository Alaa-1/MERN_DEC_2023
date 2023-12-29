import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";

const Create = () => {
  // inputs state
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [releaseYear, setReleaseYear] = useState(1800);
  const [seen, setSeen] = useState(false);
  // use navigate
  const naviagte = useNavigate();
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const createdMovie = {
      title,
      image,
      releaseYear,
      seen,
    };
    axios
      .post("http://localhost:8000/api/movies", createdMovie)
      .then((res) => {
        naviagte("/");
      })
      .catch((err) => console.log(err));
    setTitle("");
    setImage("");
    setReleaseYear(1800);
    setSeen("");
  };
  return (
    <div>
      <Link to={"/movies"}>Home</Link>

      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
          />
        </div>
        <div>
          <label>Release Year</label>
          <input
            type="number"
            onChange={(e) => {
              setReleaseYear(e.target.value);
            }}
            value={releaseYear}
          />
        </div>
        <div>
          <label>Seen?</label>
          <input
            type="checkbox"
            onChange={(e) => {
              setSeen(e.target.checked);
            }}
            checked={seen}
          />
        </div>
        <Button>Create 📽️</Button>
      </form>
    </div>
  );
};

export default Create;
