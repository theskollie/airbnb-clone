import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" />
      <div className="reviews">
        <img src={Star} className="card--star" />
        <p>{props.stars} ({props.reviews}) - USA</p>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
