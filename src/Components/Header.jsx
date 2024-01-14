import React, { useEffect } from 'react'
import "../Styles/Header.scss"
import ScrollIntoView from 'react-scroll-into-view'
import { ArrowRight2 } from './Icons'


const Header = () => {
  
  // useEffect(() => {
  //   var copy = document.querySelector(".Marquee").cloneNode(true);

  //   document.querySelector(".maq-hol").appendChild(copy);
  // }, [])


  const WavesSVG = () => (
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(37, 104, 237, 0.3)"></use>
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(37, 104, 237, 0.1)"></use>
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(37, 104, 237, 0.2)"></use>
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(37, 104, 237, 0.4)"></use>
      </g>
    </svg>
  );


  
  return (
    <header className="heading">
      <nav>
        <div className="container">
          <div className="nav__cont">
            {/* <span>KVNG</span> */}
            <img src="/assets/pic/crown2.png" alt="" className='pulse' />
            <ul>
              <li className='pulse'> <span>01.</span>About</li>
              <li className='pulse'> <span>02.</span>Experience</li>
              <li className='pulse'> <span>03.</span>Work</li>
              <li className='pulse'> <span>04.</span>Contact</li>
              <button className='btn'>
                Resume
            </button>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="heading__cont">
          <h1>David Arifalo<small>, </small><span>Front-end Developer <small>.</small></span></h1>
          <h6>
            Hi there, I'm David, a passionate front-end developer with a love for creating captivating & responsive web experiences.
            With my dedication to clean code & user-centric design, I bring designs to life and turn ideas into pixel-perfect reality. 💪🏽
          </h6>


          <ScrollIntoView className='doings__btn' selector=".project__main">
            <button className='btn'>
              View My Doings <ArrowRight2 />{" "}
            </button>
          </ScrollIntoView>
        </div>


        {/* <div className="maq-hol">
          <div className="Marquee">
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
          </div>
          <div className="Marquee">
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
            <p>KVNGING</p>
          </div>
        </div> */}
      </div>
      <WavesSVG />
    </header>
  );
}

export default Header