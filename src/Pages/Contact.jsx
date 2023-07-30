import React, { useRef } from 'react';
import '../Styles/Contact.css'
import { Footer } from './Footer'
export const Contact = () => {



    return (
        <section className="contact section" id="contact">
            <h2 className="section__title" data-aos="fade-right">
                Get In <span className="different">Touch</span>
            </h2>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 id="contact-github" className="contact-title">Talk to Me</h3>
                    <div className="contact-info">
                        {/* mail */}
                        <div className="contact-card">                          <h3 className="contact-card-title">Mail</h3>
                            <span id="contact-email" className="contact-card-data">gauravpardeshi068@gmail.com</span>
                        </div>
                        {/* phone */}
                        <div className="contact-card">
                            <h3 className="contact-card-title">Mobile</h3>
                            <span id="contact-phone" className="contact-card-data">+91 9175324590</span>
                        </div>
                        {/* Linkedin */}
                        <div className="contact-card">
                            <h3 className="contact-card-title">Linkedin</h3>
                            <span id="contact-linkedin" className="contact-card-data">gaurav pardeshi</span>


                        </div>




                    </div>

                </div>
                <div className="contact-content">
                    <h3 className="contact-title">Write me on Your Project</h3>
                    <form className="contact-form">
                        <div className="contact-from-div">
                            <label htmlFor="" className="contact-from-tag">Name</label>
                            <input type="text" name="name" className="contact-from-input" required />

                        </div>
                        <div className="contact-from-div">
                            <label htmlFor="" className="contact-from-tag">Email</label>
                            <input type="email" name="email" className="contact-from-input" required />

                        </div>
                        <div className="contact-from-div contact-from-area">
                            <label htmlFor="" className="contact-from-tag">Project</label>
                            <textarea type="text" name="project" cols='30' rows='10' className="contact-from-input" required />

                        </div>
                        <button className="button">
                            Message
                        </button>
                    </form>
                </div>

            </div>
            <Footer />
        </section>
    )
}

