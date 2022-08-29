import React, { useState } from "react";
import "./Card.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function Card() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setEXpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Have Fun With Your New Movie");
  };

  

  return (
    <div className="Card">
      <h2>Payment for Movie</h2>

      <form>
        <input
          type="tel"
          required
          placeholder="Card Number"
          name="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          required
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          required
          placeholder="MM/YY Expiry"
          name="expiry"
          value={expiry}
          onChange={(e) => {
            setEXpiry(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          required
          placeholder="CVC "
          name="cvc"
          value={cvc}
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
