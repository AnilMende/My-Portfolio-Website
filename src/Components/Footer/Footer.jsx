import React from "react";
import styled from "styled-components";
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    return(
        <FooterContainer>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I'm a Aspiring full stack developer, with expertise in React.js Node.js Express and MongoDB</p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />

            <div className="footer-bottom">
                <p className="footer-bottom-left">2025 Anil M. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
      display: flex;
      flex-direction: column;
      margin: 50px 170px;
      gap: 30px;

      .footer-top{
        display: flex;
        justify-content: space-between;
      }

      .footer-top-left p{
        font-size: 20px;
        max-width: 400px;
      }

      .footer-top-right{
        display: flex;
        align-items: center;
        gap: 35px;
      }

      .footer-email-input{
        display: flex;
        gap: 30px;
        padding: 20px 30px;
        border-radius: 50px;
        background: #32323b;
        padding-right: 80px;
      }
      .footer-email-input input{
        outline: none;
        border: none;
        background: transparent;
        color: #a0a0a0;
        font-family: Outfit;
        font-size: 18px;
      }

      .footer-subscribe{
        font-size: 20px;
        padding: 22px 45px;
        border-radius: 50px;
        background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
        cursor: pointer;
        transition: 0.3s;
      }

      .footer-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
      }
      .footer-bottom-right{
        display: flex;
        gap: 50px;
        margin-bottom: 50px;
      }

      .footer-email-input:hover{
        border: 2px solid white;
      }
      .footer-subscribe:hover{
        transform: scale(1.1);
        transition: 0.3s;
      }
`;