import React from "react";
import styled from "styled-components";
import { useState } from "react";
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b5b07791-6327-49d2-ae72-9167c0cb3510");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    // setResult(data.success ? "Success!" : "Error");
    if(data.success){
      // console.log('Success', data);
      alert(data.message)
    }
  };

    return (
        <ContactContainer id="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">

                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>anil1122@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 1234567890</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Shamshabad, Hyderbad, Telangana</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" placeholder="Enter your message here" rows="8"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 80px;
      margin: 80px 170px;

      .contact-title{
        position: relative;
      }
      .contact-title h1{
        padding: 0px 30px;
        font-size: 80px;
        font-weight: 600;
      }
      .contact-title img{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .contact-section{
        display: flex;
        gap: 150px;

      }

      .contact-left{
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
      .contact-left h1{
        font-size: 80px;
        font-weight: 700;
        background:linear-gradient(270deg, #df8908 80%, #b415ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .contact-left p{
        max-width: 550px;
        color: #d8d8d8;
        font-size: 20px;
        line-height: 35px;
      }

      .contact-details{
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: #d8d8d8;
        font-size: 22px;
      }

      .contact-detail{
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .contact-right{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 30px;
      }
      .contact-right label{
        color: #d8d8d8;
        font-size: 22px;
        font-weight: 500;
      }
      .contact-right input{
        border: none;
        width: 700px;
        height: 78px;
        border-radius: 4px;
        padding-left:20px;
        background: #32323c;
        color: #a0a0a0;
        font-family: Outfit;
        font-size: 20px;
      }
      .contact-right textarea{
        width: 650px;
        border: none;
        padding: 25px;
        border-radius: 4px;
        background: #32323c;
        color: #a0a0a0;
        font-family: Outfit;
        font-size: 20px;
      }
      
      .contact-submit{
        border: none;
        color: white;
        border-radius: 50px;
        background: linear-gradient(264deg, #df8908 -5.09% , #b415ff 106.28%);
        font-size: 22px;
        padding: 20px 50px;
        margin-bottom: 50px;
        cursor: pointer;
        transition: 0.3s;
      }
      .contact-submit:hover{
        transform: scale(1.1);
        transition: 0.3s;
      }

      /* making responsive */
      @media(max-width:768px){
        gap: 50px;
        margin: 50px 70px;
        align-items: start;

        .contact-title h1{
          padding: 0;
          font-size: 50px;
          font-weight: 600;
        }
        .contact-title img{
          width: 130px;
          margin-right: -20px;
        }

        .contact-section{
          flex-direction: column;
        }

        .contact-left h1{
          font-size: 54px;
        }

        .contact-left p{
          font-size: 18px;
        }

        .contact-detail{
          gap: 20px;
        }

        .contact-detail img{
          width: 25px;
        }

        .contact-right label{
          font-size: 20px;
        }

        .contact-right input{
          width: 100%;
          font-size: 20px;
        }

        .contact-right textarea{
          width: 95%;
          font-size: 20px;
        }

        .contact-submit{
          font-size: 20px;
          padding: 15px 40px;
        }
      }
`;