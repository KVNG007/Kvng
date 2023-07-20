import React, { useEffect, useRef } from 'react';
import gsap from "gsap"
import "../Styles/Modal.scss"

const Modal = ({ showModal, setShowModal }) => {

    const tl = useRef();
    const modalRef = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({
        paused:true
        })

        tl.current.to(".Modal", {
            opacity: 1,
            pointerEvents: "auto"
        })
        // .to(modalRef.current, {
        // clipPath: "polygon(0% 49%, 1% 49%, 1% 51%, 0% 51%)",
        // ease:'expo.inOut'
        // })
        .to(modalRef.current, {
        clipPath: "polygon(0% 49%, 100% 49%, 100% 51%, 0% 51%)",
        ease:'expo.inOut'
        })
        .to(modalRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        // duration:0.1,
        ease:'expo.inOut'
        })

    }, [])

  useEffect(() => {
    
    showModal ? tl.current.play() : tl.current.reverse()

  }, [showModal])
   

  return (
    // <div className="Modal" style={showModal ? {} : {display: "none",}}>
    <div className="Modal" >
        <div className="Modal__cont" ref={modalRef}>
            {/* <button onClick={()=> setShowModal(false)}>close</button> */}
            <div className="closer" onClick={()=> setShowModal(false)}>
              <span></span>
              <span></span>
            </div>

            <h1>Contact Me </h1>

            <form>
                <label htmlFor="name">Name</label>
                <input type="text"  name="name" />

                <label htmlFor="email">Email</label>
                <input type="email"  name="email" />

                <label for="message">Message</label>
                <textarea type="text" placeholder="Message" name="message" />

                <button>Submit </button>
            </form>
        </div>
            
    </div>
  )
}

export default Modal
