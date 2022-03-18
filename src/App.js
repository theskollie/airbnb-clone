import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Katie from "./images/katie.png";
import Wedding from "./images/wedding.png";
import Bike from "./images/bike.png";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card
          img={Katie}
          stars="5.0"
          reviews="12"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card 
        img={Wedding} 
        stars="5.0"
        reviews="100"
        title="Learn wedding photography"
        price="125"
        />
        <Card 
        img={Bike} 
        stars="4.8"
        reviews="2"
        title="Group Mountain Biking"
        price="50"
        />
      </div>
    </div>
  );
}
