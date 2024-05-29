import React from "react";
import "./Portfolio.scss";
import "./Layout/index.scss";
import { Link } from "react-router-dom";
import img from "../Assets/img/img.jpeg";
import p from "../Assets/img/p.png";
import y from '../Assets/img/Screenshot (38).png'
function Portfolio() {
  return (
    <>
      <div class="container">
        <div class="section">
          <div class="box">
            <h1>NetFlix</h1>
            <Link to="https://netflix-mu-rose.vercel.app/" target="_blank">
              <img src={img} width={350} />
            </Link>
          </div>
          <div class="box">
            <h1>Food Cone</h1>
            <Link to="https://food-cone.vercel.app/" target="_blank">
              <img src={p} width={350} />
            </Link>
          </div>
        </div>
        <div class="section">
          <div class="box">
            <h1>YouTube</h1>
            <Link to="https://you-tube-eta.vercel.app/" target="_blank">
              <img src={y} width={350} />
            </Link>
          </div>
          <div class="box">Small fronten Projects</div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
