import React from "react";
import Katie from "../images/katie.png";
import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={Katie} className="card--image" />
      <div className="reviews">
        <img src={Star} className="card--star" />
        <p>5.0 (6) - USA</p>
      </div>
      <p className="card--title">Life lessons with Katie Zaferes</p>
      <p className="card--price">
        <b>From $136</b> / person
      </p>
    </div>
  );
}
