import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abtleft from '../../assets/abtleft.jpeg'

 



export const About = () => {
  return (
    <div id='about' className="about">
       <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className="myimg" src={abtleft} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>A passionate frontend developer, eager to master advanced frameworks and always honing their skills through personal projects while staying current with web trends..</p>
                <p>My passion for frontend development is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project</p>
                
              </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTMl & CSS</p><hr style={{width:"50%"}} /></div>
                      <div className="about-skill"><p>JavaScript </p><hr style={{width:"70%"}} /></div>
                      <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                      <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
              </div>
            </div>
        </div>
        <div className="about-acheievements">
          <div className='about-achievement'>
            <h1>NO</h1>
            <p>EXPERIENCE</p>
        </div>
        <hr />
          <div className='about-achievement'>
            <h1>7+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>NA</h1>
          <p>HAPPY CLIENTS</p>
        </div>

        </div>
    </div>
  )
}
