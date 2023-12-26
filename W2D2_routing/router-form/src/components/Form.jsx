import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // heroId state
  const [heroId, setHeroId] = useState(1);
  // useNavigate
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", heroId);
    navigate("/hero/" + heroId);
  };
  return (
    <div>
      <h1>Heroes Form 📝</h1>
      <form onSubmit={handleSubmit}>
        <p>{heroId}</p>
        <input
          type="number"
          onChange={(e) => {
            setHeroId(e.target.value);
          }}
        />
        <button>Fetch Hero</button>
      </form>
    </div>
  );
};

export default Form;
