import React from 'react'
import './Contact.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import email_icon from '../../assets/email_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35c6a0a0-f5fe-403f-ba40-9a2f72891e45");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="Email" className="contact-icon colorize" />
              <a href="mailto:deepanshuc255@gmail.com">deepanshuc255@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" className="contact-icon colorize" />
              <a href="tel:+917668606297">+91-7668606297</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" className="contact-icon colorize" />
              <p>Greater Noida, India</p>
            </div>
            <div className="contact-detail">
              <img src={instagram_icon} alt="Instagram" className="contact-icon colorize" />
              <a href="https://www.instagram.com/i.deepanshuu_" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <div className="contact-detail">
              <img src={facebook_icon} alt="Facebook" className="contact-icon colorize" />
              <a href="https://www.facebook.com/deepanshu.chauhan.9887" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="LinkedIn" className="contact-icon colorize" />
              <a href="https://www.linkedin.com/in/deepanshu-chauhan-630a31257" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="GitHub" className="contact-icon colorize" />
              <a href="https://github.com/Deepanshuchauhan01" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
