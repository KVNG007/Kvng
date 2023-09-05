import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap"
import emailjs from 'emailjs-com';
import "../Styles/Modal.scss"

const Modal = ({ showModal, setShowModal }) => {

    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [sent, setSent] = useState(false)

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


    const handleInput = (event) => {
      setFormData (prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
      })
    }



    const submitForm = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_putbq5j",
          "template_51jgeq2",
          e.target,
          "7RIUUOejlIW9Fqx6y"
        )
        .then(
          (result) => {
            setSent(true);

            setTimeout(() => {
              setShowModal(false);
              setSent(false);
              setFormData({ name: "", email: "", message: "" });
            }, 1500);
          },
          (error) => {
            setSent(null);
            console.log(error.text);
          }
        );
      
      e.target.reset();
    }

  return (
    <div className="Modal" >
        <div className="Modal__cont" ref={modalRef}>
            <div className="closer" onClick={()=> setShowModal(false)}>
              <span></span>
              <span></span>
            </div>

            <h1>Contact Me </h1>

            <form onSubmit={(e)=> submitForm(e)}>
                <label htmlFor="name">Name</label>
                <input type="text"  name="name" value={formData.name} onChange={handleInput} />

                <label htmlFor="email">Email</label>
                <input type="email"  name="email" value={formData.email} onChange={handleInput} />

                <label htmlFor="message">Message</label>
                <textarea type="text" placeholder="Message" name="message" value={formData.message} onChange={handleInput} />

                <button>{sent ? "Sent" : "Submit"} </button>
            </form>
        </div>
            
    </div>
  )
}

export default Modal
