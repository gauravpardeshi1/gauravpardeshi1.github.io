import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import resume from '../img/resume.png'
import Contact from "./Contact";


const Home= () => {
  return (
    <>
    <div>
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">GAURAV PARDESHI</h1>
          <h3>FULL STACK WEB DEVELOPER</h3>
          <p>
          Strong in web development and integration with intuitive
problem-solving skills. Passionate about implementing
and launching new projects. ability to translate business
requirements into technical solutions. I'm looking to start
my career as an entry-level web developer with a
reputable firm driven by technology .

          </p>
          <button className='resume' ><a href={resume} download >Resume</a></button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/gaurav.1.1.1/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/Ga1156">
                <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/gaurav-pardeshi-981b2a244/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img className="home-img"
            src="https://ca.slack-edge.com/T04K6J37RH9-U04L6BHU93N-71945cdb2d9e-512"
            alt="profile"
          />
           {/* <img
            src="https://ca.slack-edge.com/T049S05Q9GW-U04AV1KU77D-48b107cda4d4-512"
            alt="profile"
          /> */}
        </Profile>
      </Slide>
    </Container>
    </div>
   

   
    <DIV>
    <Skills/> 
   <Projects/>
   <About/>
   <Contact/>
    </DIV>
   
    </>
  
  );
};

export default Home;

const DIV =styled.div`
width:100%;`
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
 
 
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
color:white;
text-align:left;
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
   a{
    text-decoration: none;
    color: #fff;
   }
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
  
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);

    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`

  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;

