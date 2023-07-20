import React from 'react'
import { useEffect, useRef } from 'react'
import {gsap} from "gsap"
import "../Styles/Dropdown.scss"

const Dropdown = ({show}) => {

  // var head = document.querySelectorAll(".head") 

  const menuRef = useRef();
  const tl = useRef();
  const textRef = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused:true
    })

    tl.current.to(menuRef.current, {
      top:0,
      duration:0.01,
      ease:'expo.inOut'
    }).to(".overlay", {
      width:"0%",
      duration:0.1,
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
      ease:'expo.inOut'
    })
  }, [])

  useEffect(() => {
    
    show ? tl.current.play() : tl.current.reverse()

  }, [show])
  
  





  return (
    <div className="dropdown" ref={menuRef}>
       <div className='menu__flex'>

        <div className="menu">
          <h4>Menu</h4>

          <h2 ref={textRef} className='cover'>About Me <div className="overlay" ></div></h2>
          <h2 className='cover'>Work <div className="overlay "></div></h2>
          <h2 className='cover'>Experience <div className="overlay"></div></h2>
          <h2 className='cover'>Contact <div className="overlay"></div></h2>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <div className='grid'>
            <section className='cover'>
              <div className="overlay"></div>
              <h3>Email</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem dolor sit amet .</p>
            </section>

            <section className='cover'>
              <div className="overlay"></div>
              <h3>HeadQuarters</h3>
              <p>Lorem ipsum dolor sit  consectetur.</p>
              <p>Dolor sit amet .</p>
              <p>Neque, accusamus delectus aliasasperiores!</p>
            </section>

            <section className='cover'>
              <div className="overlay"></div>
              <h3>Phone</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </section>

            <section className='cover'>
              <div className="overlay"></div>
              <h3>Legal</h3>
              <p>Privacy and Cookies.</p>
            </section>

          </div>
        </div>

       </div>
    </div>
  )
}

export default Dropdown