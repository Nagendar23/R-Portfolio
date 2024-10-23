import React from 'react';
import './Hero.css';
import mypic from '../../assets/mypic.jpeg';
import { Link as AnchorLink } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="pic" src={mypic} alt="displayimg" />
      <h1><span>I'm Nagendar Varkala,</span> frontend developer</h1>
      <p>An aspiring frontend developer, this student is already proficient in HTML, CSS, JavaScript and React JS.</p>
      <div className="hero-action">
        <div className="hero-connect">
         
          <AnchorLink 
            className="anchor-link" 
            to="contact" 
            smooth={true} 
            duration={500}
            offset={-70} 
          >
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
