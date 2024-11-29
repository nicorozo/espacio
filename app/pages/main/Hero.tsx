import React from "react";
import Button from "@/app/components/Buttons/Button";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_div">
        <div className="hero_tags-container">
          <span className="hero_tag">EVENTS</span>
          <span className="hero_tag">WEDDINGS</span>
          <span className="hero_tag">YOUTUBE</span>
        </div>
        <h1>Event Photography & Video in Wroclaw</h1>
        {/* 	&#322; wroc */}
        <Button>Contact</Button>
      </div>
      <div className="hero_div">
        <Image
          className="hero_image"
          src={"/hero_picture.jpg"}
          width={100}
          height={100}
          objectFit="contain"
          alt="Hero Band picture"
        />
      </div>
    </div>
  );
};

export default Hero;
