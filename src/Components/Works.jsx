import React , { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Lucid, Zuri, Distro, Provinci, Marlin } from "./Desc"
// import "swiper/swiper-bundle.min.css"
import "../Styles/Works.scss"
import "swiper"
import 'swiper/css/bundle'

const Works = () => {

  const [progress, setProgress] = useState(2);

  return (
    <div className="works">
      <div className="container">
        <div className="worked">
          <div className="worked__cont">
            <div className="worked__heading">
              <h1>
                <span>02. </span>Where I’ve Worked
              </h1>
            </div>

            <div className="swiperr">

            <li
                  className={progress === 0 ? "active" : ""}
                  onClick={() => setProgress(0)}
                >
                  Lucid Jungles
                </li>
              
              <ul>
                
                <li
                  className={progress === 1 ? "active" : ""}
                  onClick={() => setProgress(1)}
                >
                  Work Distro
                </li>
                <li
                  className={progress === 2 ? "active" : ""}
                  onClick={() => setProgress(2)}
                >
                  Zuri Team
                </li>
                <li
                  className={progress === 3 ? "active" : ""}
                  onClick={() => setProgress(3)}
                >
                  Provinci Media
                </li>
                <li
                  className={progress === 4 ? "active" : ""}
                  onClick={() => setProgress(4)}
                >
                  Marlin Club
                </li>
              </ul>
            </div>

            <div className="worked__body">
              <div className="control">
                <aside>
                  <span style={{ top: `${progress * 60}px` }}></span>
                </aside>

                <ul>
                  <li
                    className={progress === 0 ? "active" : ""}
                    onClick={() => setProgress(0)}
                  >
                    Lucid Jungles
                  </li>
                  <li
                    className={progress === 1 ? "active" : ""}
                    onClick={() => setProgress(1)}
                  >
                    Work Distro
                  </li>
                  <li
                    className={progress === 2 ? "active" : ""}
                    onClick={() => setProgress(2)}
                  >
                    Zuri Team
                  </li>
                  <li
                    className={progress === 3 ? "active" : ""}
                    onClick={() => setProgress(3)}
                  >
                    Provinci Media
                  </li>
                  <li
                    className={progress === 4 ? "active" : ""}
                    onClick={() => setProgress(4)}
                  >
                    Marlin Club
                  </li>
                </ul>
              </div>

              <div className="outlet">
                {progress === 0 ? (
                  <Lucid />
                ) : progress === 1 ? (
                  <Distro />
                ) : progress === 2 ? (
                  <Zuri />
                ) : progress === 3 ? (
                  <Provinci />
                ) : (
                  <Marlin />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Works;
