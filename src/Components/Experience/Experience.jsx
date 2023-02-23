import React from "react";
import "./Experience.css";
import Typed from 'react-typed';

const Experience = () => {
  return (
   
    <div className="container-experience">
        <div className="row">
            <section className="col">
            <div className='All-header' style={{margin: '7% 0 2% 0'}}>  
                <Typed strings={['EXPERIENCE']} typeSpeed={150} loop />
            </div>
                <div className="contents" id="Experience">
                    <div className="box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>January 2023 - Present </h4>
                        <h3>ACE Online</h3>
                        <h5>SDE Intern</h5>
                        <p>ACE Online is the digital education initiative by ACE Engineering Academy, which is India’s leading test preparation platform for competitive examinations. They leverage the technology to provide access to quality education for students across India.</p>
                    </div>
                    <div className="box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>August 2022 – December 2022</h4>
                        <h3>Applied Database Practicum Course, IIT Mandi</h3>
                        <h5>Teaching Assistant</h5>
                        <p>Applied Database Practicum is Web Development core course for second year CSE, IIT Mandi students.</p>
                    </div>
                    <div className="box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>May 2022 - Jun 2022</h4>
                        <h3>Microsoft</h3>
                        <h5>Intern Engage Mentee</h5>
                        <p>Microsoft intern Engage is a program for student engagement and mentorship that provides 1:1 support to selected students as they work on a project and an inside look at Microsoft's culture and values.</p>
                    <div className="blur-e"></div>
                    <div className="blur-e2"></div>  
                    </div>
                </div>
            </section>
        </div>
    </div>
    
  );
};

export default Experience;
