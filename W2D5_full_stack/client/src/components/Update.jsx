import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
const Update = () => {
  // grab the movie id from the url
  const { id } = useParams();
  // use navigate
  const naviagte = useNavigate();
  // inputs state
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [releaseYear, setReleaseYear] = useState(1800);
  const [seen, setSeen] = useState(false);

  // grab the selected movie from db
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setImage(res.data.image);
        setReleaseYear(res.data.releaseYear);
        setSeen(res.data.seen);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // save the updated movie to the db
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedMovie = {
      title,
      image,
      releaseYear,
      seen,
    };
    axios
      .patch("http://localhost:8000/api/movies/" + id, updatedMovie)
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
        <Button>Update ✏️</Button>
      </form>
    </div>
  );
};

export default Update;
