import React from 'react'
import { useEffect, useRef } from 'react'
import {gsap} from "gsap"
import ScrollIntoView from 'react-scroll-into-view'
import "../Styles/Dropdown.scss"
import { ArrowRight2 } from './Icons'

const Dropdown = ({show, setShow}) => {

  const aboutRef = useRef();

  const menuRef = useRef();
  const dd2Ref = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const dd2tl = useRef();

  useEffect(() => {

    tl.current = gsap.timeline({
      paused:true
    })

    tl2.current = gsap.timeline({
      paused:true
    })

    dd2tl.current = gsap.timeline({
      paused:true
    })

    //first TL
    tl.current.to(menuRef.current, {
      top:0,
      duration: .5,
      ease:'expo.inOut'
    })

    //2nd TL
    tl2.current.to(".overlay", {
      width:"0%",
      duration:0.25,
      ease:'expo.inOut'
    }).to(".overlay",{
    // }).to(overlayRef.current,{
      width:"100%",
      right:0,
      ease:'expo.inOut'
    }).to(".cover",{
      color: "black",
      duration:0,
    })
    .to(".overlay",{
      width:"0%",
      ease:'expo.inOut',
      // duration: 0.25
    })

    dd2tl.current.to(dd2Ref.current, {
      right: "0dvh",
      duration: .75,
      ease:'expo.inOut'
    })


  }, [])

  useEffect(() => {
    
    show ? tl.current.play() : tl.current.reverse()
    show ? tl2.current.play() : tl2.current.reverse()
    show ? dd2tl.current.play() : dd2tl.current.reverse()

  }, [show]);
  
  
  return (
    <>
      <div className="dropdown" ref={menuRef}>
        <div className="menu__flex">
          <div className="menu">
            <h4>Menu</h4>

            <ScrollIntoView selector=".about">
              <h2
                className={show ? "cover dos" : "cover"}
                ref={aboutRef}
                onClick={() => setShow(false)}
              >
                About Me <div className="overlay"></div>
              </h2>
            </ScrollIntoView>

            <ScrollIntoView selector=".works">
              <h2
                className={show ? "cover dos" : "cover"}
                id="work"
                onClick={() => setShow(false)}
              >
                Experience<div className="overlay "></div>
              </h2>
            </ScrollIntoView>

            <ScrollIntoView selector=".project__main">
              <h2
                className={show ? "cover dos" : "cover"}
                id="exp"
                onClick={() => setShow(false)}
              >
                Works<div className="overlay"></div>
              </h2>
            </ScrollIntoView>

            <ScrollIntoView selector=".footer">
              <h2
                className={show ? "cover dos" : "cover"}
                id="contact"
                onClick={() => setShow(false)}
              >
                Contact <div className="overlay"></div>
              </h2>
            </ScrollIntoView>
          </div>

          <div className="contact">
            <h4>Contact</h4>

            <div className="grid">
              <section className="cover">
                <div className="overlay"></div>
                <h3>Email</h3>
                <p>davidarifalo001@gmail.com.</p>
                <p>Arifal David Ayobami.</p>
              </section>

              <section className="cover">
                <div className="overlay"></div>
                <h3>Address</h3>
                <p>Illupeju Quarters, Aule Extension.</p>
                <p>Ondo State, Akure.</p>
                <p>Nigeria.</p>
              </section>

              <section className="cover">
                <div className="overlay"></div>
                <h3>Phone</h3>
                <p>(+234) 814 150 5195.</p>
              </section>

              <section className="cover">
                <div className="overlay"></div>
                <h3>Legal</h3>
                
                <p>Privacy and Cookies.</p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown2" ref={dd2Ref}>
        <div className="menuu">
          <ScrollIntoView selector=".about">
            <h2 ref={aboutRef}
              onClick={() => setShow(false)}
            >
              <span>01.</span>
              About Me
            </h2>
          </ScrollIntoView>

          <ScrollIntoView selector=".works">
            <h2 id="work"
              onClick={() => setShow(false)}
            >
              <span>02.</span>
              Experience
            </h2>
          </ScrollIntoView>

          <ScrollIntoView selector=".project__main">
            <h2 id="exp"
              onClick={() => setShow(false)}
            >      
            <span>03.</span>
            Works              
            </h2>
          </ScrollIntoView>

          <ScrollIntoView selector=".footer">
            <h2 id="contact"
              onClick={() => setShow(false)}
            >
              <span>04.</span>
              Contact
            </h2>
          </ScrollIntoView>

          <a href="./David Arifalo Resume.pdf" download >Resume <ArrowRight2 /> </a>

        </div>
      </div>
    </>
  );
}

export default Dropdown