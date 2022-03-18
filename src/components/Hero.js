import React from "react";
import HeroImage from "../images/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={HeroImage} className="hero--photo" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts - all
        without leaving home.
      </p>
    </div>
  );
}
