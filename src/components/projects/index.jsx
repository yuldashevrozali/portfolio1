import React from 'react';
import projectImage from '../../assets/crypto.webp';
import hero from '../../assets/hero1.webp';
import country from '../../assets/countrys.jpg';
import quiz from '../../assets/quiz.png';
import './index.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-blocks">
        <div className="project-block1">
          <a href="https://imtihon7-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
              <img src={hero} alt="Project" className="project-image" />
              <div className="hover-overlay">
                <span className="hover-text">➔</span>
              </div>
            </div>
          </a>
        </div>
        <div className="project-block">
          <h1>03</h1>
          <h3>online shop</h3>
          <p>This site is an online store that has a variety of products. You can buy the products by selecting them and adding them to the cart</p>
        </div>
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
          <p>This site is a crypto site that contains information, price and chart information about various crypto currencies</p>
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
          <p>This site will give you complete information about the states. You can search almost all countries</p>
        </div>
        <div className="project-block1">
          <a href="https://quiz-9-dars.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
              <img src={quiz} alt="Project" className="project-image" />
              <div className="hover-overlay">
                <span className="hover-text">➔</span>
              </div>
            </div>
          </a>
        </div>
        <div className="project-block">
          <h1>04</h1>
          <h3>quiz website</h3>
          <p>This site is a quiz site where you can take a test and see your score</p>
        </div>

      </div>

    </div>
  );
}
