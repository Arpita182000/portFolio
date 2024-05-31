import React from "react";
import "./Portfolio.scss";
import "./Layout/index.scss";
import { Link } from "react-router-dom";
import img from "../Assets/img/img.jpeg";
import p from "../Assets/img/p.png";
import y from '../Assets/img/Screenshot (38).png'
import m from '../Assets/img/m.png'
import f from '../Assets/img/f.png'
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
        
          <div class="box">
            <h1>YouTube</h1>
            <Link to="https://you-tube-eta.vercel.app/" target="_blank">
              <img src={y} width={350} />
            </Link>
          </div>
          <div class="box">
          <h1>Small Projects</h1>
            <Link to="https://monsta-oix1c6ae4-arpitas-projects-9e2857b5.vercel.app/" target="_blank">
              <img src={m} width={350} />
            </Link>
          </div>
        
          <div class="box">
          <h1>Small Projects</h1>
            <Link to="https://face-book-mjubgoyus-arpitas-projects-9e2857b5.vercel.app/" target="_blank">
              <img src={f} width={350} />
            </Link>
          </div>
      </div>
    </>
  );
}

export default Portfolio;
