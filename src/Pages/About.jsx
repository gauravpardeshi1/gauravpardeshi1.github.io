import React from "react";
import "../Styles/About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import Home2 from "./Home/Home";
export const About = () => {
  return (
    <>
    
      <div  className="about center">
      
        <Home2/>
      </div>
     
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    
    </>
  );
};
