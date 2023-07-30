import React from 'react'

import '../Styles/Footer.css'
import { SiGithub, SiLinkedin, SiMinutemailer } from "react-icons/si";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Gaurav</h1>
               
                <div className="footer-social">
                    <a  href="https://github.com/gauravpardeshi1" className="footer-social-link" target='_blank'><SiGithub /></a>
                    <a href="https://www.linkedin.com/in/gaurav-pardeshi-981b2a244/" className="footer-social-link" target='_blank'><SiLinkedin /></a>
                    <a href="mailto:gauravpardeshi068@gmail.com" className="footer-social-link" target='_blank'><SiMinutemailer /></a>

                </div>
                <span className="footer-copy">&#169;Gaurav,All rights reserved</span>
            </div>
        </footer>
    )
}

