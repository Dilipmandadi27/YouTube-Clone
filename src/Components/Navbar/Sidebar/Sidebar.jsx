import React from "react";
import "./Sidebar.css";
import home_icon from "../../../assets/home.png";
import game from "../../../assets/game_icon.png";
import auto from "../../../assets/automobiles.png";
import sports from "../../../assets/sports.png";
import entertainment from "../../../assets/entertainment.png";
import technology from "../../../assets/tech.png";
import music_icon from "../../../assets/music.png";
import blog_icon from "../../../assets/blogs.png";
import news_icon from "../../../assets/news.png";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import p5 from "../../../assets/p5.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <img src={home_icon} alt="" />
        <p>Home</p>
      </div>
      <div className="sidebar-container">
        <img src={game} alt="" />
        <p>Gaming</p>
      </div>
      <div className="sidebar-container">
        <img src={auto} alt="" />
        <p>Automobiles</p>
      </div>
      <div className="sidebar-container">
        <img src={sports} alt="" />
        <p>Sports</p>
      </div>
      <div className="sidebar-container">
        <img src={entertainment} alt="" />
        <p>Entertainment</p>
      </div>
      <div className="sidebar-container">
        <img src={technology} alt="" />
        <p>Technology</p>
      </div>
      <div className="sidebar-container">
        <img src={music_icon} alt="" />
        <p>Music</p>
      </div>
      <div className="sidebar-container">
        <img src={blog_icon} alt="" />
        <p>Blogs</p>
      </div>
      <div className="sidebar-container">
        <img src={news_icon} alt="" />
        <p>News</p>
      </div>
      <hr />

      <h3>Subscribed</h3>
      <div className="subscribe-sidebar ">
        <div className="sidebar-container">
          <img src={p1} alt="" />
          <p>Nas Daily</p>
        </div>
        <div className="sidebar-container">
          <img src={p2} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="sidebar-container">
          <img src={p3} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="sidebar-container">
          <img src={p4} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="sidebar-container">
          <img src={p5} alt="" />
          <p>MrBeast</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
