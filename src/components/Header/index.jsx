import React from 'react';
import logo from '../../assets/logo.svg';
import download from '../../assets/download.svg';
import resume from '../../assets/resume.pdf'
import './index.css'

export default function Header() {

  return (
    <div className='portfolio-header'>
      <div className="logo">
      <a href='./'><img src={logo} alt="logo" /></a>
      </div>    
      <div className="header-menu">
        <p> <a href='./hero'>About Me</a></p>
        <p><a href='./skills'>Skills</a></p>
        <p><a href='./project'>Project</a></p>
        <p><a href='./contact'>Contact me</a></p>
      </div>
      <div className="resume">
        <a href={resume} download="resume.pdf">
          <button>
            Resume <img src={download} alt="download" />
          </button>
        </a>
      </div>
    </div>
  );
}
