import React from 'react';
import logo from '../../assets/logo.svg';
import download from '../../assets/download.svg';
import bar from '../../assets/bar.svg';
import resume from '../../assets/resume.pdf'
import './index.css'

export default function Header() {
  return (
    <div className='portfolio-header'>
      <div className="logo">
        <a href='/'>
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header-menu">
        <p><a href='/'>About Me</a></p>
        <p><a href='/skills'>Skills</a></p>
        <p><a href='/projects'>Projects</a></p>
        {/* <p><a href='/contact'>Contact me</a></p> */}
      </div>
      <div className="resume">
        <a href={resume} download="resume.pdf">
          <button>
            Resume <img src={download} alt="download" />
          </button>
        </a>
      </div>
      <div className="bar">
        <div class="dropdown">
          <button class="dropbtn"><img src={bar} alt="" /></button>
          <div class="dropdown-content">
            <a href="/">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

