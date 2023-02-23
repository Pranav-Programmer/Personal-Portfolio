import React from 'react'
import './Intro.css'

// import FloatinDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import CV from "../../img/cv.png";
// import Download from "../../img/download.png";
import Vector1 from "../../img/vector1.png";
import Vector2 from "../../img/vector2.png";
import Pranav from "../../img/pranav.png";
// import NLJ from "../../img/NLJ.png";
// import Web from "../../img/web.png";

// import Resume from "./PranavDharme_Resume.pdf";

function Intro() {
  return (
    <div className="Intro" id="Intro">
    {/* left name side */}
    <div className="i-left">
      <div className="i-name">
        {/* yahan change hy darkmode ka */}
        <span>Pranav</span>
        <span> Dharme</span>
        <span className='Edu1'>
          <h4>Indian Institute of Technology, Mandi</h4>
          <h4 className='Branch'>Computer Science & Engineering</h4>
          <h4>UG 3rd Year (B.Tech.)</h4>
        </span>
        <span className='Edu2'>
        <p style={{ fontSize:'70%', textAlign:'justify', marginTop:'5%' }}>
            I am a 3rd year computer science and engineering student at Indian Institute of Technology Mandi.
            In addition to being hardworking, I am also very interested in learning new things. Besides frontend development, I have experience with backend development as well. 
            There are several full stack web development projects I've done in past using CRED operations with password validation and encrypting functionalities in the back-end.
            I have also worked on a project using Python and Stramlit to create a web application for the purpose of marking addetndance and drowsiness detection of driver.
            In the present, I am doing a summer internship at ACE Online, Hyderabad, for six months.
            I can contribute to software development field and also looking forward to explore new field with great interest.
        </p>
        </span>
      </div>
      {/* <button className="button i-button">Button</button> */}
      <div className="i-icons">
          <a href="https://drive.google.com/file/d/1V2HjfqYBKzpFEcZSpD8eL7CUynx_jE2G/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={CV} alt=""/></a> 
          <a href="https://github.com/Pranav-Programmer" target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/pranav-dharme/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a>     
          {/* <a href={Resume} download><img src={Download} alt=""/></a> */}
        </div>
    </div>
    <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Pranav} alt="" />
          <div data-aos="fade-right" data-aos-duration="2000" style={{top: '-10%', left:'50%'}}>
          {/* <FloatinDiv img={Web} text1="Web" text2="Developer" /> */}
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" style={{top: '73%', left:'10%'}}>
          {/* <FloatinDiv img={NLJ} text1="My" text2="Best Work" /> */}
          </div>
          {/* <div className="blur" style={{ background: "rgb(238 210 255)"}}></div>
        <div className="blur2"></div> */}
        </div>
    </div>
  )
}

export default Intro
