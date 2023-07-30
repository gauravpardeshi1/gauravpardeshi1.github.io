import React from 'react'
import { SiGithub, SiLinkedin, SiMinutemailer } from "react-icons/si";
const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/gauravpardeshi1" className="home-social-icon" target='_blank'><SiGithub /></a>
            <a href="https://www.linkedin.com/in/gaurav-pardeshi-981b2a244/" className="home-social-icon" target='_blank'><SiLinkedin /></a>
            <a href="mailto:gauravpardeshi068@gmail.com" className="home-social-icon" target='_blank'><SiMinutemailer /></a>
        </div>
    )
}

export default Social