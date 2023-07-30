import React from "react";
import "../Styles/Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../Context/theme";
import Profile from '../Img/Profile.png'

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="about" className="about section">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={Profile}
                alt="Images"
                className="home-img"
              />
            </div>
            <div className="introduction_datacontainer" id="user-detail-intro">
              <p class="about__description" >
                Hi! I'm Gaurav
                <br /><br />
                I'm Learing Full Stack Web Development at Masai School.
                <br /><br />
                Enthusiastic about learning and expressing new technology.<br /> An
                aspiring mern developer with 1200+ hours of practical experience<br />
                in coding and building numerous websites.<br /> Solved 700+ DSA
                questions. <br />Strong ambition to work as a Frontend developer to
                produce valuable solution
                <br /><br />
              </p>
              <div  className="about__info">
                <div>
                  <span class="about__info-title">1200+</span>
                  <span class="about__info-name"
                  >Hours of <br />
                    Coding</span
                  >
                </div>

                <div>
                  <span class="about__info-title">700+</span>
                  <span class="about__info-name"
                  >DSA <br />
                    Problems
                  </span>
                </div>
                <div>
                  <span class="about__info-title">15+</span>
                  <span class="about__info-name"
                  >Completed <br />
                    Project</span
                  >
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
