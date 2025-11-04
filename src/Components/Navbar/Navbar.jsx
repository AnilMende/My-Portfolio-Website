import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return(
        <NavbarContainer>
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">
                Connect With Me
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
`;

