import React from "react";
import "../Styles/Project.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import flipkart from '../Img/flipkart.png'
import myntra from '../Img/myntra.png'
import clotho from '../Img/clotho.png'
import burberry from '../Img/burberry.png'
import tatamg from '../Img/1mg.png'
import Nebula from '../Img/Nebula.png'
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
 
  SiPython,
  SiAngular,
  SiReactrouter,
  SiChakraui,
  SiTailwindcss,
  SiJavascript,
 
  SiMongodb,
  SiRedux,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import Carousel from "react-multi-carousel";
import { IoLogoJavascript } from "react-icons/io";
import { Timeline } from "./Timeline";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="section">
          <h2 className="section__title" data-aos="fade-right">
            My <span className="different">Projects</span></h2>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass="container"
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1,

                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable={false}
          >
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={myntra}
                      alt="Mail Chimp"
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Myntra Clone</h2>
                  <p className="project-description">
Clone of Myntra It is an e-commerce stores for fashion and lifestyles
products for men, women and kids.s. It sells high-quality clothes, branded footwear,beauty and home and living accessories, and more.                  </p>
                  <div className="project-tech-stack">
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <FaReact />
                    <SiRedux />
                   <SiChakraui/>
                   <SiReactrouter/>
                  </div>
                  <div>
                    <a
                      href="https://frontend-omega-plum.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Ga1156/myntra"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={Nebula}
                      alt="Mail Chimp"
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Nebula</h2>
                  <p className="project-description">
                  IT is the one-stop destination for hosts to showcase their properties and guests to discover their ideal rentals. Whether you have a house, apartment, or condo to rent, or you're seeking temporary accommodation, It makes the process simple and secure.                  </p>
                  <div className="project-tech-stack">
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <SiPython/>
                    <SiAngular />
                   <SiTailwindcss/>
                   <SiMongodb/>
                  </div>
                  <div>
                    <a
                      href="https://ga-201-project-kdfw.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/gauravpardeshi1/GA201_PROJECT"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={clotho}
                      alt="Myntra"
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Koovs Clone</h2>
                  <p className="project-description">
                  Koovs is an E-commerce website for purchasing clothes
and footwear online from their latest collection of fashion
apparel, accessories & more.                  </p>
                  <div className="project-tech-stack">
                    <IoLogoJavascript />
                    <FaReact />
                    <SiRedux />
                   <SiChakraui/>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href="https://clotho.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Ga1156/incredible-birth-7157"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={tatamg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Tata 1mg Clone </h2>
                  <p className="project-description">
                  Tata 1mg is an online healthcare platform that offers a wide range of healthcare products and services, including medicines, diagnostic tests, doctor consultations, and wellness products, to customers in India.

</p>
                  <div className="project-tech-stack">
                  <IoLogoJavascript />
                    <FaReact />
                    <SiRedux />
                   <SiChakraui/>
                  </div>
                  <div>
                    <a
                      href="https://tata1mg-clone-umber.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Ga1156/merciful-note-7666"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Gihub
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={burberry}
                      alt="TicTacToe"
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Burberry Clone</h2>
                  <p className="project-description">
                  It is an e-commerce website that is most famous for
trench coats, and it also provides fragrances and
cosmetics products.
                  </p>
                  <div className="project-tech-stack">
                    <FaReact />
                    <SiHtml5 />
                    <IoLogoJavascript />
                   
                  </div>
                  <div>
                    <a
                      href="https://burberry.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Ga1156/zealous-price-4318"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Gihub
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project">
                <div className="project_videocontainer">
                  <div data-aos="fade-right">
                    <img
                      src={flipkart}
                      alt="TicTacToe"
                    />
                  </div>
                </div>
                <div className="project_information" data-aos="fade-right">
                  <h2 className="project-title">Flipkart Clone</h2>
                  <p className="project-description">
                  Flipkart, It is an eCommerce website. Flipkart has been selling a vast range of lifestyles
products for men, women and kids online, similar to Amazon.                  </p>
                  <div className="project-tech-stack">
                  
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <FaReact />
                    <SiRedux />
                  </div>
                  <div>
                    <a
                      href="https://flipkart-app-woad.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <span type="button" className="btn btn--outline onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Ga1156/full-number-3645"
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <span type="button" className="btn btn--outline">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </Carousel>
        </div>
        <Timeline />
      </section>
    </>
  );
};
