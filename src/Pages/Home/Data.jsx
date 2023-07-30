import React from 'react'
import { Type } from '../Type'
// import { Link } from 'react-scroll'
import { FaFilePdf } from 'react-icons/fa'
import gaurav from '../../Img/gaurav.pdf'
const Data = () => {
    return (
        <div className="home-data">
            <h1 className="home-title">Gaurav Pardeshi</h1>
            <h3 className="home-subtitle"><Type/></h3>
            <p className="home-description">
            Aspiring full stack developer Strong in web development
and integration with intuitive problem-solving skills.
Passionate about implementing and launching new
projects. ability to translate business requirements into
technical solutions.          </p>

            <button to="contact" id='home-button' className="button button--flex">
            < a href={gaurav} download > Resume <FaFilePdf size={20}  /></a>
            </button>
        </div>
    )
}

export default Data