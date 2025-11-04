import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

  const [menu, setMenu] = useState('home');

    return(
        <NavbarContainer>
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMenu('home')}>Home</p>{menu === 'home'? <img src={underline}/> : <></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu('about')}>About Me</p>{menu === 'about' ? <img src={underline}/> : <></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu('services')}>Services</p> {menu === 'services'? <img src={underline}/> : <></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu('work')}>Portfolio</p> {menu === 'work'? <img src={underline}/> : <></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu('contact')}>Contact</p> {menu === 'contact'? <img src={underline}/> : <></>}</AnchorLink></li>
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

      .nav-menu{
        display: flex;
        align-items: center;
        list-style: none;
        gap: 60px;
        font-size: 20px;
      }

      .nav-connect{
        padding: 20px 50px;
        border-radius: 50px;
        background: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
        font-size: 22px;
        cursor: pointer;
        transition: 0.5s;
      }
      .nav-connect:hover{
        transform: scale(1.05);

      }

      .nav-menu li{
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
      }

      .nav-menu li img{
        display: flex;
        margin: auto;
      }

      .anchor-link{
        text-decoration: none;
        color: white;
      }
`;

