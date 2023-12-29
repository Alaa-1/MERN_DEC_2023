import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies/" + id)
      .then((oneMovie) => setMovie(oneMovie.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} width="250px" />
          <p>Release Year: {movie.releaseYear}</p>
        </>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default OneMovie;
