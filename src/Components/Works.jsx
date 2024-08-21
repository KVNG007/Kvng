import React , { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Lucid, Zuri, Distro, Provinci, Feedxpay } from "./Desc"
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
                Feedxpay👑
              </li>
              
              <ul>
                
                <li
                  className={progress === 1 ? "active" : ""}
                  onClick={() => setProgress(1)}
                >
                  Lucid Jungles
                </li>
                <li
                  className={progress === 2 ? "active" : ""}
                  onClick={() => setProgress(2)}
                >
                  Work Distro
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
                  Zuri Team
                </li>
              </ul>
            </div>

            <div className="worked__body">
              <div className="control">
                <aside>
                  <span style={{ top: `${progress * 60}px`, backgroundColor: 'white'}}></span>
                </aside>

                <ul>
                  <li
                    className={progress === 0 ? "active" : ""}
                    onClick={() => setProgress(0)}
                  >
                    Feedxpay
                  </li>
                  <li
                    className={progress === 1 ? "active" : ""}
                    onClick={() => setProgress(1)}
                  >
                    Lucid Jungles
                  </li>
                  <li
                    className={progress === 2 ? "active" : ""}
                    onClick={() => setProgress(2)}
                  >
                    Work Distro
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
                    Zuri Teams
                  </li>
                </ul>
              </div>

              <div className="outlet">
                {progress === 0 ? (
                  <Feedxpay />
                ) : progress === 1 ? (
                  <Lucid />
                ) : progress === 2 ? (
                  <Distro />
                ) : progress === 3 ? (
                  <Provinci />
                ) : (
                  <Zuri />
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
