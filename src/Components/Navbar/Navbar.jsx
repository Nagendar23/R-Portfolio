import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import { Link as AnchorLink, scrollSpy } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
}

const closeMenu = () =>{
  menuRef.current.style.right="-350px";
}

  useEffect(() => {
    scrollSpy.update();  // Ensure scroll tracking is up-to-date
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="logoalt" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to="home" 
            smooth={true} 
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={() => setMenu("services")}
          >
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to="work" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={() => setMenu("work")}
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-70}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' to='contact' offset={50} onClick={()=> setMenu("contact")}>
        Connect With Me</AnchorLink> </div>
    </div>
  );
};

export default Navbar;
