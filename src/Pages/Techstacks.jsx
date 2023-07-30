import React from "react";
import "../Styles/Techstacks.css";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiVercel,
  SiExpress,
  SiPython,
  SiAngular,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  const bannerData = [
    { id: 1, url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/1439d458-3f9b-4a49-830c-a47a126bb9311647456798699-Roadster_Desk_Banner.jpg' },
    { id: 2, url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/8f1a79c7-3f11-4608-9f31-30a03a606cb41647537798522-SS22-DesktopBanners-Unisex.jpg' },
    { id: 3, url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/52df3f93-8d0f-412d-b416-fc665706199d1647456798690-Casual-Shoes_Dk.jpg' }
    ,
    { id: 4, url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/28/4ac3be4b-f02c-4106-8dc9-be1898a81def1648463267842-Desktop-Banner-----1920x504.jpg' }




  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },

    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },


  };
  return (
    <>
      <section id="skills">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Skills</span></h2>

        <div style={{ width: '80%', margin: 'auto', marginTop: '30px', paddingBottom: '50px' }}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
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
            startleft={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 5,
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
            showDots={false}
            sliderClass=""
            slidesToSlide={1}

            swipeable
          >

            <div className="skills-card">
              <SiJavascript size={100} />

              <h5 className="skills-card-name">Javascript</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiHtml5 size={100} />
              <h5 className="skills-card-name">HTML</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <DiCss3 size={100} />

              <h5 className="skills-card-name">CSS</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <FaReact size={100} />
              <h5 className="skills-card-name">React</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiRedux size={100} />
              <h5 className="skills-card-name">Redux</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiAngular size={100} />
              <h5 className="skills-card-name">Angular</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiPython size={100} />
              <h5 className="skills-card-name">Python</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <FaNodeJs size={100} />
              <h5 className="skills-card-name">Nodejs</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <DiMongodb size={100} />
              <h5 className="skills-card-name">MongoDb</h5>
              <img className="skills-card-img" />
            </div>

            <div className="skills-card">
              <SiExpress size={100} />
              <h5 className="skills-card-name">Express</h5>
              <img className="skills-card-img" />
            </div>

            <div className="skills-card">
              <SiMaterialui size={100} />
              <h5 className="skills-card-name">Material Ui</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <BsBootstrap size={100} />
              <h5 className="skills-card-name">Bootstrap</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiTailwindcss size={100} />
              <h5 className="skills-card-name">Tailwind CSS</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiNetlify size={100} />
              <h5 className="skills-card-name">Netlify</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <SiVercel size={100} />
              <h5 className="skills-card-name">Vercel</h5>
              <img className="skills-card-img" />
            </div>
            <div className="skills-card">
              <VscGithub size={100} />

              <h5 className="skills-card-name">Github</h5>
              <img className="skills-card-img" />
            </div>



          </Carousel>
        </div>
      </section>
    </>
  );
};
