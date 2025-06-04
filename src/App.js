import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import icon from "../images/icon-dice.svg";
import pattern from "../images/pattern-divider-desktop.svg";

let App = () => {
  let [id, setId] = useState("");
  let [advice, setAdvice] = useState("");

  let fetchAdvice = async () => {
    try {
      let response = await axios.get("https://api.adviceslip.com/advice");
      setId(response.data.slip.id);
      console.log(response.data.slip.id);
      setAdvice(response.data.slip.advice);
      console.log(response.data.slip.advice);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch the Advice!!!");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="box-sizing">
      <h6 className="heading">ADVICE {`#${id}`}</h6>
      <p className="advice">{`"${advice}"`}</p>
      <img className="divider" src={pattern} alt="divider" />
      <button
        className="next"
        onClick={(e) => {
          fetchAdvice(e);
        }}
      >
        <img className="icon" src={icon} alt="button" />
      </button>
    </div>
  );
};
export default App;
