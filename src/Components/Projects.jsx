import React from 'react'
import "../Styles/Projects.scss"

import { ArrowRight2 } from "./Icons"

const Touch = () => {




  return (
    <div className="project__main" style={{ position: "relative" }}>
      <div className="container">
        <div className="project">
          <div className="project__heading">
            <h1>
              <span>03. </span>Some Things I’ve Built
            </h1>
          </div>

          <a
            href="https://lucidjungles.netlify.app/"
            target="_blank"
            style={{
              position: "sticky",
              height: "100dvh",
              top: "0",
              left: "0",
              zIndex: "20",
            }}
          >
            <section>
              <div className="left">
                <p>Featured Project</p>
                <h2>LUCID JUNGLES</h2>
                <div className="overflow">
                  A gamified music player that lets you create all kinds of
                  immersive musical experiences, convert your songs into
                  customisable games, manage your digital identifier (Avatae),
                  merch, tours and events from the comfort of your home.
                </div>

                <span>
                  VS Code &nbsp; React.js &nbsp; SASS &nbsp; ReduxToolkit &nbsp;
                  HTML
                </span>
              </div>

              <div className="img__holder">
                <img src="./assets/LUCID.png" alt="LUCID" />
                <span>
                  Visit <ArrowRight2 />
                </span>
              </div>
            </section>

            <div className="title">
              {" "}
              <span></span> Lucid Jungles
            </div>
          </a>

          <a
            href="https://synergy-xio.netlify.app"
            target="_blank"
            style={{
              position: "sticky",
              height: "100dvh",
              top: "0",
              left: "0",
              zIndex: "22",
            }}
          >
            <aside>
              <div className="img__holder">
                <img src="./assets/synergy.png" alt="LUCID" />
                <span href="https://thefutureisnowhomes.com" target="_blank">
                  Visit <ArrowRight2 />
                </span>
              </div>

              <div className="left">
                <p>Solo Project</p>
                <h2>Synergy</h2>
                <div className="overflow">
                  I designed a sleek, engaging landing page -Synergy.ai, that
                  highlights the power of decentralized innovation. My design focuses on intuitive user experience and
                  visual storytelling to captivate potential users and
                  communicate the transformative potential of Synergy.ai's
                  offerings.
                </div>

                <span>
                  VS Code &nbsp; HTML &nbsp; CSS &nbsp; JAVASCRIPT &nbsp; SWIPER
                </span>
              </div>
            </aside>

            <div className="title">
              {" "}
              <span></span> Synergy
            </div>
          </a>

          <a
            href="https://future-homes.vercel.app/"
            target="_blank"
            style={{
              position: "sticky",
              height: "100dvh",
              top: "0",
              left: "0",
              zIndex: "24",
            }}
          >
            <section>
              <div className="left">
                <p>Featured Project</p>
                <h2>FUTURE HOMES</h2>
                <div className="overflow">
                  The Future is Now Homes is a real estate company that provides
                  housing solutions to its customers at different locations
                  within Nigeria securing properties for greater value and
                  profits.
                </div>

                <span>
                  VS Code &nbsp; React.js &nbsp; ReduxToolkit &nbsp; Express
                  &nbsp; MongoDB
                </span>
              </div>

              <div className="img__holder">
                <img src="./assets/TFINH.png" alt="LUCID" />
                <span href="https://thefutureisnowhomes.com" target="_blank">
                  Visit <ArrowRight2 />
                </span>
              </div>
            </section>

            <div className="title">
              {" "}
              <span></span> Future is Now Homes
            </div>
          </a>

          <a
            href="https://sensational-jelly-e7f0d4.netlify.app"
            target="_blank"
            style={{
              position: "sticky",
              height: "100dvh",
              top: "0",
              left: "0",
              zIndex: "26",
            }}
          >
            <aside>
              <div className="img__holder">
                <img src="./assets/NEAR.png" alt="LUCID" />
                <span href="https://lucidjungles.io" target="_blank">
                  Visit <ArrowRight2 />
                </span>
              </div>

              <div className="left">
                <p>Solo Project</p>
                <h2>NEAR CLONE</h2>
                <div className="overflow">
                  A simple clone of the NEAR website, Created entirely using
                  ReactJs and hosted using free hosting service from netlify.
                </div>

                <span>
                  {" "}
                  HTML &nbsp; SASS &nbsp; JavaScript &nbsp; React.js &nbsp; VS
                  Code
                </span>
              </div>
            </aside>

            <div className="title">
              {" "}
              <span></span> Near Website Clone
            </div>
          </a>

          {/* <div className="others">
                    <h2>Other Noteworthy Projects.</h2>
                    <div className='others__cont'>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>

                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>
                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>
                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>
                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>
                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                        <section className='sects'>
                            <div className="icons">
                                <img src="./assets/github-svg1.svg" alt="link to project" />
                                <img src="./assets/expend-4.svg" alt="link to project" />
                            </div>
                            <h1>Building a Headless Mobile App CMS From Scratch</h1>
                            <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                            <ul>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                        </section>
                    </div>
                </div> */}
        </div>
      </div>

      {/* <footer>&copy; 2022 David Arifalo. Made with love and zero transitions...yet!</footer> */}
    </div>
  );
}

export default Touch