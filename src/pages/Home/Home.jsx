import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero_banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import Play_icon from "../../assets/play_icon.png";
import Info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/Titlecards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Hero_banner} alt="Hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={Hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark">
              <img src={Info_icon} alt="Info Icon" />
              Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top pics for You"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
