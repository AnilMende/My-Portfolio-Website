import React, { useState, useRef } from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right ="-350px";
  }

  return (
    <NavbarContainer>
      {/* <img src={logo} alt="" /> */}
      <h2 className="logo">ANIL</h2>
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />

        <a href="#home" onClick={() => setMenu('home')} className={menu === 'home' ? "active": ""} >Home</a>
        <a href="#about" onClick={() => setMenu('about')} className={menu === 'about'? "active":""}>About Me</a>
        <a href="#services" onClick={() => setMenu('services')} className={menu === 'services' ? "active":""}>Services</a>
        <a href="#work" onClick={() => setMenu('work')} className={menu === 'work' ? "active":""}>Portfolio</a>
        <a href="#contact" onClick={() => setMenu('contact')} className={menu === 'contact'? "active":""}>Contact</a>

        {/* <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMenu('home')}>Home</p>{menu === 'home' ? <img src={underline} /> : <></>}</AnchorLink></li> */}
        {/* <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu('about')}>About Me</p>{menu === 'about' ? <img src={underline} /> : <></>}</AnchorLink></li> */}
        {/* <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu('services')}>Services</p> {menu === 'services' ? <img src={underline} /> : <></>}</AnchorLink></li> */}
        {/* <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu('work')}>Portfolio</p> {menu === 'work' ? <img src={underline} /> : <></>}</AnchorLink></li> */}
        {/* <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu('contact')}>Contact</p> {menu === 'contact' ? <img src={underline} /> : <></>}</AnchorLink></li> */}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 170px;

      .logo{
        font-family: Outfit;
        font-size: 26px;
        font-weight: 800;
        cursor: pointer;
      }

      .nav-menu{
        display: flex;
        align-items: center;
        list-style: none;
        gap: 40px;
        font-size: 16px;
      }

      .nav-connect{
        padding: 15px 20px;
        border-radius: 50px;
        background: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
        font-size: 16px;
        cursor: pointer;
        transition: 0.5s;
      }
      .nav-connect:hover{
        transform: scale(1.05);

      }

      .nav-menu a{
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
      }

      .active{
        padding-bottom: 2px;
        border-bottom: 2px solid white;
      }

      .nav-menu li img{
        display: flex;
        margin: auto;
      }

      .anchor-link{
        text-decoration: none;
        color: white;
      }

      .nav-mob-close{
        display: none;
      }
      .nav-mob-open{
        display: none;
      }

      /* making responsive */
      @media (max-width:768px) {

        margin: 20px 50px;
        display: flex;
        align-items: center;

        .nav-connect{
          display: none;
        }

        .nav-mob-open{
          display: block;
          position: fixed;
          right: 30px;
          /* left: 30px; */
        }

        .nav-mob-close{
          display: block;
          position: relative;
          top: 30px;
          left: 290px;
          width: 30px;
        }

        .nav-menu{
          position: fixed;
          flex-direction: column;
          align-items: start;
          top: 0;
          gap: 30px;
          background-color: #1f0016;
          width: 350px;
          height: 100%;
          z-index: 2;
          transition: right 0.5s;
          right: -350px;
        }

        .nav-menu li{
          font-size:30px;
          padding-left: 100px;
          flex-direction: row;
          gap: 20px;
        }
      }
`;

