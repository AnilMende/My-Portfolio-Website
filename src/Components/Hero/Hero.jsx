import React from "react";
import styled from "styled-components";
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <img src={profile_img} className="profile-img" />
      <h1><span>I'm Anil Mende,</span> Full Stack Developer Based In India</h1>
      <p className="description">I'm a Aspiring full stack developer, with expertise in React.js Node.js Express and MongoDB</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
        </div>
        <div className="hero-resume">Myresume</div>
      </div>
    </HeroContainer>
  )
}

export default Hero;

const HeroContainer = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 35px;
      
      .profile-img{
        margin-top: 70px;
      }

      h1{
        text-align: center;
        width: 70%;
        font-size: 75px;
        font-weight: 600;
      }

      h1 span{
        background: linear-gradient(270deg,#df8908 10%, #b415ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .description{
        width: 50%;
        text-align: center;
        font-size: 24px;
        line-height: 40px;
      }

      .hero-action{
        display: flex;
        align-items: center;
        gap: 25px;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 50px;
      }

      .hero-connect{
        padding: 20px 40px;
        background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
        border-radius: 50px;
        cursor: pointer;
      }

      .hero-resume{
        padding: 20px 65px;
        border-radius: 50px;
        cursor: pointer;
        border: 2px solid #fff;
      }

      .hero-connect:hover{
        border: 2px solid #fff;
      }

      .hero-resume:hover{
        border-color:#b415ff;
      }

      .anchor-link{
        text-decoration: none;
        color: white;
      }

      /* making responsive */
      @media (max-width:768px){
        .profile-img{
          margin-bottom: 120x;
          width: 260px;
        }

        h1{
          margin-top: 50px;
          width: 90%;
          font-size: 50px;
        }

        .description{
          width: 60%;
          font-size: 18px;
          line-height: 32px;
          margin: 10px 0px;
        }

        .hero-action{
          gap: 16px;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 50px;
        }

        .hero-connect{
          padding: 20px 30px;
          border-radius: 40px;
        }
        .hero-resume{
          padding: 20px 30px;
          border-radius: 40px;
        }
      }
`;