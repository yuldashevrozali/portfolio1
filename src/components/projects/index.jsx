import React from 'react';
import projectImage from '../../assets/crypto.webp'; // Rasmni o'zingizning yo'lingiz bilan o'zgartiring
import country from '../../assets/countrys.jpg'; // Rasmni o'zingizning yo'lingiz bilan o'zgartiring
import './index.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-blocks">
        <div className="project-block1">
          <a href="https://cryptofolioweb.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
              <img src={projectImage} alt="Project" className="project-image" />
              <div className="hover-overlay">
                <span className="hover-text">➔</span>
              </div>
            </div>
          </a>
        </div>
        <div className="project-block">
          <h1>01</h1>
          <h3>crypto website</h3>
          <p>this site is a crypto site that contains information, price and chart information about various crypto currencies</p>
        </div>
        <div className="project-block1">
          <a href="https://3-homewrok.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
              <img src={country} alt="Project" className="project-image" />
              <div className="hover-overlay">
                <span className="hover-text">➔</span>
              </div>
            </div>
          </a>
        </div>
        <div className="project-block">
          <h1>02</h1>
          <h3>countrys website</h3>
          <p>this site will give you complete information about the states. You can search almost all countries</p>
        </div>
      </div>

    </div>
  );
}
