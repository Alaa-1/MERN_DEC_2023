import React from "react";
import { useParams } from "react-router-dom";
const Hero = () => {
  const { heroId } = useParams();
  console.log(heroId);
  return (
    <fieldset>
      <legend>Hero.jsx</legend>
      <h1>Heroes 🦸‍♀️🦸</h1>
      <p>Hero ID : {heroId}</p>
    </fieldset>
  );
};

export default Hero;
