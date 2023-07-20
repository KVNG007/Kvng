import React  from 'react'
import "../Styles/Footer.scss"

const Footer = ({ setShowModal }) => {

  return (
    <div className="footer">
        <div className='container'>
            <div className="footer__cont">
                <p>04. &nbsp;What’s Next?</p>
                <h1>Get In Touch</h1>
                <h2> I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question
                    or just want to say hi, I’ll try my best to get back to you!🚀
                </h2>

                <div className='button'>
                    <button onClick={()=> setShowModal(true)}> Contact Me</button>
                </div>

                <p> Built by David Arifalo</p>
            </div>
        </div>

        <p className="mail">davidarifalo001@gmail.com</p>
        <div className="sms">
            <div className="sms_cont">
                <img src="./assets/github-svg1.svg" alt="git" />
            </div>

            <div className="sms_cont">
                <img src="./assets/twitter-svg4.svg" alt="twitter" />
            </div>

            <div className="sms_cont">
                <img src="./assets/linkedin-svg2.svg" alt="linkedIn" />
            </div>

            {/* <img src="" alt="" /> */}
        </div>
    </div>
  )
}

export default Footer