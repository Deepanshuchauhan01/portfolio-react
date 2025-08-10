import React from 'react'
import './Hero.css'
import profile_deep from '../../assets/profile_deep.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_deep} alt="Profile of Deepanshu Chauhan" />
      <h1><span>I'm Deepanshu Chauhan</span> B.Tech at NIET, Gr Noida.</h1>
      <p>
        I'm constantly upskilling myself, whether it's through building personal tech projects,
        collaborating in team environments, or keeping up with the latest industry trends.
        As I step into the professional world, my goal is to contribute meaningfully to impactful
        tech-driven solutions while continuing to grow and evolve as an engineer in the reputed company.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a
          href="/portfolio-react/resume.pdf"
          download
          className="hero-resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
