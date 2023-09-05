import React from 'react';
import "../Styles/About.scss"
import { useScroll, useTransform } from 'framer-motion'


import {Slide} from "./style"
const About = () => {
    let width = window.innerWidth
    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0, .1125 ], [width, 0]);

  return (
    <div className="about">
        <div  className='about__main'>
            <div className="container">
               <div className="aboutme">
                    <div className="aboutme__heading">
                        <h1><span>01. </span>ABOUT ME</h1>
                    </div>

                    <div className="aboutme__body">
                       <div className="pees">
                        <p>Hi there! My name is David and I enjoy creating things that live on the internet. 
                                My interest in web development started back in 2019 during the lockdown when I decided to build and manage my
                                personal blog — Apparently you need proper footing in web development to do that. 😅 Moreover, the experience taught me a lot about HTML & CSS!
                            </p>

                            <p> Fast-forward to today, and I’ve had the privilege of interning at a few companies, a handful of start-up, and a young but growing corporation.
                                My main focus currently is building accessible, inclusive products and digital experiences at Lucid Jungles. I am open and actively serching for new
                                opportunities to  provide value as well as advance my career as a web developer.
                            </p>
                       </div>

                       <div className="img">
                        <img src='/assets/pic/2.png' alt='main pic' />
                        <div className="after"></div>
                       </div>

                    </div>
 
                    <div className="aboutme__bottom">
                        <p>Here are some Technologies I've been working with: </p>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Vue</li>
                            <li>Node Js</li>
                            <li>ThreeJs</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>


        <Slide style={{ x }} className="slide">
            ABOUT ME
        </Slide>


        {/*<h4>FRONTEND DEVELOPMENT</h4>
        <p>HTML5/ CSS3</p>
        <p>JQuery & JavaScript libraries</p>
        <p>Responsive Design</p>
        <p>Sass</p>
        <p>Git / SVN</p> */}
            
    </div>
  )
}

export default About





