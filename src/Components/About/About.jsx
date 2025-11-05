import React from "react";
import styled from "styled-components";
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/about_profile.svg';

const About = () => {
    return(
        <AboutContainer id="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Aspiring Full Stack Developer skilled in building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                        <p>Passionate about writing clean, efficient code and creating responsive user interfaces. Eager to contribute to real-world projects through strong problem-solving and end-to-end development skills.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width:'50%'}} />
                        </div>

                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width:'70%'}} />
                        </div>

                        <div className="about-skill">
                            <p>React Js</p>
                            <hr style={{ width:'60%'}} />
                        </div>

                        <div className="about-skill">
                            <p>Node JS</p>
                            <hr style={{ width:'80%'}} />
                        </div>

                        <div className="about-skill">
                            <p>MongoDB</p>
                            <hr style={{ width:'50%'}} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 80px;
      margin: 80px 170px;

      .about-title{
        position: relative;
      }

      .about-title h1{
        padding: 0px 30px;
        font-size: 80px;
        font-weight: 600;
      }

      .about-title img{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .about-sections{
        display: flex;
        gap: 80px;
      }

      .about-right{
        display: flex;
        flex-direction: column;
        gap: 80px;
      }

      .about-para{
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 24px;
        font-weight: 500;
      }

      .about-skills{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .about-skill{
        display: flex;
        gap: 50px;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;
      }
      .about-skill p{
        min-width: 150px;
        font-size: 24px;
        font-weight: 500;
      }
      .about-skill hr{
        outline: none;
        border: none;
        width: 50%;
        height: 8px;
        border-radius: 50px;
        background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
      }
      .about-skill:hover{
        transform: scale(1.05);
        transition: 0.5s;
      }

      .about-achievements{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 80px;
      }
      .about-achievement{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: 0.5s;
        cursor: pointer;
      }
      .about-achievement h1{
        font-size: 60px;
        font-weight: 700;
        background: linear-gradient(270deg, #df8908 50.41%, #b415ff 90.25%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .about-achievement p{
        font-size: 22px;
        font-weight: 500;
      }
      .about-achievement:hover{
        transform: scale(1.12);
        transition: 0.5s;
      }

      /* making responsive */
      @media (max-width:768px){
        gap: 80px;
        margin: 50px 70px;
        align-items: start;

        .about-title h1{
          font-size: 50px;
          padding: 0;
        }

        .about-title img{
          width: 130px;
          right: -20px;
        }

        .about-sections{
          flex-direction: column;
        }
        .about-left{
          display: none;
        }
        .about-para{
          font-size: 18px;
          line-height: 32px;
        }

        .about-skill p{
          font-size: 20px;
        }
        .about-skill hr{
          height: 6px;
        }
        .about-achievements{
          justify-content: space-between;
        }
        .about-achievement{
          gap: 10px;
        }
        .about-achievement h1{
          font-size: 34px;
          font-weight: 700;
        }
        .about-achievement p{
          text-align: center;
          font-size: 16px;
        }
      }
`;