import React from "react";
import styled from "styled-components";
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    return(
        <MyWorkContainer id="work">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {
                    mywork_data.map((work, index) => {
                        return <img key={index} src={work.w_img} alt="" />
                    })
                }
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </MyWorkContainer>
    )
}

export default MyWork;


const MyWorkContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 80px;
      margin: 80px 170px;

      .mywork-title{
        position: relative;
      }

      .mywork-title h1{
        padding: 0px 30px;
        font-size: 60px;
        font-weight: 600;
      }
      .mywork-title img{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .mywork-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
      }
      .mywork-container img{
        box-sizing: border-box;
        width: 415px;
        height: 280px;
        transition: 0.3s;
        cursor: pointer;
      }
      .mywork-container img:hover{
        transform: scale(1.10);
        border: 4px solid #ff00ff;
        border-radius: 10px;
        transition: 0.3s;
      }

      .mywork-showmore{
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-radius: 50px;
        border: 2px solid white;
        padding: 20px 40px;
        font-size: 20px;
        font-weight: 500;
        transition: 0.6s;
        cursor: pointer;
      }
      .mywork-showmore:hover{
        gap: 30px;
        transition: 0.6s;
      }

      /* making responsive */

      @media (max-width:768px){
        gap: 50px;
        margin: 50px 70px;
        align-items: start;

        .mywork-title h1{
          padding: 0;
          font-size: 50px;
          font-weight: 600;
        }

        .mywork-title img{
          width: 130px;
          margin-right: -30px;
        }

        .mywork-container{
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .mywork-container img{
          width: 100%;
          height: 100%;
        }

        .mywork-showmore{
          padding: 20px 40px;
          font-size: 18px;
          margin: 50px auto;
          cursor: pointer;
        }
      }
`;