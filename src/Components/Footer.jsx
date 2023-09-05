import React  from 'react'
import "../Styles/Footer.scss"

const Footer = ({ setShowModal }) => {

  return (
    <div className="footer">
        <div className='container'>
            <div className="footer__cont">
                <p>04. &nbsp;What’s Next?</p>
                <h1>Get In Touch</h1>
                <h2> I’m currently looking for new opportunities, my inbox is always open. Whether you have a project
                    or just want to say hi, I’ll try as much as possible to get back to you!🚀
                </h2>

                <div className='button'>
                    <button onClick={()=> setShowModal(true)}> Contact Me</button>
                </div>

                <p className='credit'> Built by David Arifalo</p>
            </div>
        </div>

        <a href="mailto:davidarifalo001@gmail.com" target='_blank' className="mail">davidarifalo001@gmail.com</a>
        
        <div className="sms">
            <a href='https://github.com/KVNG007' target='_blank' className="sms_cont">
                <img src="./assets/github-svg1.svg" alt="git" />
            </a>

            <a href='https://www.linkedin.com/in/david-arifalo-b5465a129/' target='_blank' className="sms_cont">
                <img src="./assets/twitter-svg4.svg" alt="twitter" />
            </a>

            <a href='https://twitter.com/Kvng_Dheyvied' target='_blank' className="sms_cont">
                <img src="./assets/linkedin-svg2.svg" alt="linkedIn" />
            </a>
        </div>
    </div>
  )
}

export default Footer