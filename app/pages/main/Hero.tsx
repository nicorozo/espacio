import React from "react";
import Button from "@/app/components/Buttons/Button";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_div left">
        <div className="hero_tags-container">
          <span className="hero_tag">EVENTS</span>
          <span className="hero_tag">WEDDINGS</span>
          <span className="hero_tag">YOUTUBE</span>
        </div>
        <h1 className="hero_h1">Event photography & video in Wroclaw</h1>
        {/* 	&#322; wroc */}
        <Button className="button_main">Contact</Button>
      </div>
      <div className="hero_div image_parent">
        <Image
          className="hero_image"
          src={"/hero_picture2.jpg"}
          width={1000}
          height={1000}
          alt="Hero Band picture"
        />
      </div>
    </div>
  );
};

export default Hero;
