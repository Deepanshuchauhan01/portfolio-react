import React, { useState, useRef } from 'react';
import './Navbar.css';
import deep from '../../assets/deep.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu=() =>{
    menuRef.current.style.right="0";
  }
  const closeMenu=() =>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={deep}  alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <div className="nav-item" onClick={() => setMenu("home")}>
              <p>Home</p>
              {menu === "home" && <img src={underline} alt="" className="nav-underline" />}
            </div>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <div className="nav-item" onClick={() => setMenu("about me")}>
              <p>About me</p>
              {menu === "about me" && <img src={underline} alt="" className="nav-underline" />}
            </div>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <div className="nav-item" onClick={() => setMenu("services")}>
              <p>Services</p>
              {menu === "services" && <img src={underline} alt="" className="nav-underline" />}
            </div>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <div className="nav-item" onClick={() => setMenu("portfolio")}>
              <p>Portfolio</p>
              {menu === "portfolio" && <img src={underline} alt="" className="nav-underline" />}
            </div>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <div className="nav-item" onClick={() => setMenu("contact")}>
              <p>Contact</p>
              {menu === "contact" && <img src={underline} alt="" className="nav-underline" />}
            </div>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
