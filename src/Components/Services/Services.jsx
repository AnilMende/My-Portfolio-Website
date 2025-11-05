import React from "react";
import styled from "styled-components";
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {
          Services_Data.map((service, index) => {
            return <div className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          })
        }
      </div>
    </ServicesContainer>
  )
}

export default Services;

const ServicesContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 80px;
      margin: 80px 170px;

      .services-title{
        position: relative;
      }

      .services-title h1{
        padding: 0px 30px;
        font-size: 60px;
        font-weight: 600;
      }

      .services-title img{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .services-format{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 30px;
        border-radius: 10px;
        border: 2px solid white;
        cursor: pointer;
      }

      .services-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        margin-bottom:50px;
      }

      .services-format h3{
        font-size: 22px;
        font-weight: 600;
      }

      .services-format h2{
        font-size: 30px;
        font-weight: 800;
        background: linear-gradient(270deg,#df8908 50%, #b414ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .services-format p{
        color: #d4d4d4;
        font-size: 20px;
        line-height: 30px;
        max-width: 300px;
      }

      .services-readmore{
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 30px;
      }

      .services-format:hover{
        border: 2px solid #ff00ff;
        background: linear-gradient(40deg, #3f0028,#582300);
        transform: scale(1.05);
        transition: 0.4s;
      }

      @media (max-width:768px) {
        align-items: start;
        gap: 70px;
        margin: 20px 70px;

        .services-title h1{
          padding: 0;
          font-size: 50px;
        }
        .services-title img{
          width: 130px;
          margin-right: -20px;
        }
        .services-format{
          padding: 32px;
          gap: 20px;
        }

        .services-format h2{
          font-size: 28px;
        }

        .services-format p{
          font-size: 18px;
          line-height: 32px;
          max-width: 300px;
        }

        .services-readmore img{
          width: 20px;
        }

        .services-container{
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
      }
`;