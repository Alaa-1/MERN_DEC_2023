import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseURL = "https://akabab.github.io/superhero-api/api/id";

const Hero = () => {
  // hero state
  const [chosenHero, setChosenHero] = useState(null);
  // grab the heroId from useParams
  console.log(useParams());
  const { heroId } = useParams();
  // useNavigate
  const nav = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);
  // Consume the heroes API
  useEffect(() => {
    axios
      .get(`${baseURL}/${heroId}.json`)
      .then((response) => setChosenHero(response.data))
      .catch((error) => nav("/error"));
  }, [heroId]);
  return (
    <fieldset>
      <legend>Hero.jsx</legend>
      {/* {JSON.stringify(chosenHero)} */}
      {chosenHero ? (
        <>
          <h2>{chosenHero.name}</h2>
          <img src={chosenHero.images.md} alt={chosenHero.name} />
        </>
      ) : (
        "LOADING ..."
      )}
    </fieldset>
  );
};

export default Hero;
