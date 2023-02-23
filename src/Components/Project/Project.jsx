import React from 'react'
import Typed from 'react-typed';
import './Project.css'
import Card from './card'
import IMG1 from '../../img/prj1.png';
import IMG2 from '../../img/prj2.jpg';
import IMG3 from '../../img/prj3.jpg';
import IMG4 from '../../img/prj4.jfif';
import IMG5 from '../../img/prj5.png';
import IMG6 from '../../img/prj6.png';
const info = [ 
  {
    name: 'NlistJob',
    link: 'http://jobway.epizy.com/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/NlistJob', // Link to the github repo
    image: IMG1,
    border: 'solid #6c72b2', // border-
    boxShadow: '0 15px 15px #6c72b2', // box-shadow
    color: 'rgb(228, 177, 177)',
    text: '• Build a job portal where recruiters can post the job and applicant can apply for it.',          
    text1:'• Programmed a backend in a way that the changes in particular page can reflect over another page using CRED operation.',
    text2:'• Implemented password validation and encrypting functionalities in the back-end.',               
    text3:'• Technology use: HTML, CSS, PHP, MySQL, Bootstrap JavaScript'
  },
  {
    name: 'FaceRec',
    link: 'https://youtu.be/W-godAD9yWE', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Face-Recognition-Advance-Attendance-System.github.io', // Link to the github repo
    image: IMG2,
    border: '0 15px 15px #6300bd', // border-
    boxShadow: '0 15px 15px #6300bd', // box-shadow
    color: 'rgb(177, 231, 210)',
    text: '• Design the front-end using HTML and CSS.',          
    text1:'• Implemented Face recognition using python library in the back-end.',
    text2:'• Build the backend structure which stores user images in a folder which gets used in the recognition process.',               
    text3:'• Technology use: Python, Facial recognition, Streamlite, HTML, CSS'
  },
  {
    name: 'Li-Fi',
    link: 'https://youtu.be/fc5VE636f4I', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Li-Fi', // Link to the github repo
    image: IMG3,
    border: '0 15px 15px #0e6e84', // border-
    boxShadow: '0 15px 15px #0e6e84', // box-shadow
    color: 'rgb(234, 191, 211)',
    text: '• LiFiVerse is a mechanical device which transmit the data with the help of flickering property of light from one device to another device.',          
    text1:'• The device can be useful in situations when the use of radio wave communication devices is prohibited or when there is a need to transmit data at high speeds over a short distance.',
    text2:'• Technology use: Arduino, C++, HTML, CSS, JavaScript, Bootstrap, Kotlin, XML'
  },
  {
    name: 'Detecting Drowsiness',
    link: 'https://user-images.githubusercontent.com/79044490/203357603-fe72a49e-1893-4451-9960-6b75cf487d6a.mp4', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Detecting_Drowsiness_based_on_Camera_Sensor', // Link to the github repo
    image: IMG4,
    border: '0 15px 15px #e0e6e7', // border-
    boxShadow: '0 15px 15px #e0e6e7', // box-shadow
    color: 'rgb(234, 234, 197)',
    text: '• Design the front-end using HTML and CSS with Streamlit library of python.',          
    text1:'• Implemented Driver Drowsiness Detection using python library in the back-end.',
    text2:'• Build the backend structure which takes the eyes ratio as a input and compare it with the 27% size of eyes and take decision based on it.',               
    text3:'• Technology use: Python, MySQL, Streamlite, OpenCV, HTML, CSS'
  },
  {
    name: 'MoodFlip',
    link: 'https://pranav-programmer.github.io/MoodFlip.github.io/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/MoodFlip.github.io', // Link to the github repo
    image: IMG5,
    border: '0 15px 15px #c0c0c0', // border-
    boxShadow: '0 15px 15px #c0c0c0', // box-shadow
    color: 'rgb(236, 221, 194)',
    text: '• Clone a social media site web page and implement some features like Register and login, videos.',          
    text1:'• Use CSS nicely to implement the dark mode feature. Also build a simple number guessing game and merge with site.',
    text2:'• Technology use: HTML, CSS, JavaScript'
  },
  {
    name: 'Personal Portfolio',
    link: 'http://localhost:3000/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Portfolio', // Link to the github repo
    image: IMG6,
    border: '0 15px 15px #ede5ee', // border-
    boxShadow: '0 15px 15px #ede5ee', // box-shadow
    color: 'rgb(193, 225, 232)',
    text: '• Create a personal portfolio webapp to collect all the information about me and my projects with some extra information.',          
    text1:'• Use some react functionality like react-router-dom, react-typed, react-reveal, react-icons, react-scroll, react-particles-js, react-animations, etc to make the site more attractive and more functional.',
    text2:'• At the end of site create a contact form which will send the data to my email id using emailjs.',
    text3:'• Technology use: HTML, CSS, React JS'
  }
]

let i = 1;
function project() {
  return (
    <div className='project'>
         <div className='All-header'>    
          <Typed strings={['PROJECTS']} typeSpeed={150} loop />
         </div>
       <main id='project'>
          {
          info.map(function (data) {
            return <Card IMG={data.image} name={data.name} Link={data.link} GitHub={data.github} Border={data.border} BoxShadow={data.boxShadow} color={data.color} text={data.text} text1={data.text1} text2={data.text2} text3={data.text3} class={`div${i++}`} key={i}/>
          })}
        </main>
        <p className='more' style={{ marginLeft:'87%', marginTop:'.3rem'}}><a href="https://github.com/Pranav-Programmer?tab=repositories" target="_blank" rel="noopener noreferrer">More project</a></p>
    </div>
  )
}

export default project
