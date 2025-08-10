import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_deep from '../../assets/profile_deep.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_deep} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Proficient in core CS subjects like Data Structure, Operating System and DBMS with hands-on-experience in building Full Stack Web Application(MERN). Demonstrate ability to write clean code, efficient code and solve over 300+ DSA problems. Passionate about developing efficient end-to-end solutions and committed to continous learning in modern world development. </p>
                    <p>Throughtout my career, I have had the priviledge of collaborating with prestigious organizations, contributing to thei   r success and growth.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"58%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
                </div>
            </div>
        </div>
            <div className="about-achievements">
                <a
                target="_blank"
                rel="noopener noreferrer"
                ></a>
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />

                <a
                    href="https://github.com/Deepanshuchauhan01/Coursera-Certifications/tree/main/coursera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-achievement-link"
                >
                <div className="about-achievement">
                    <h1>9+</h1>
                    <p>CERTIFICATIONS AT COURSERA</p>
                </div>
            </a>
            <hr />

            <a
                href="https://github.com/Deepanshuchauhan01/Coursera-Certifications/tree/main/infosys"
                target="_blank"
                rel="noopener noreferrer"
                className="about-achievement-link"
            >
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>CERTIFICATIONS AT INFOSYS SPRINGBOARD</p>
                </div>
            </a>
            </div>

    </div>
  )
}

export default About