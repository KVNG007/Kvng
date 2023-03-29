import React from 'react'

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <h3>ABOUT ME</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique autem
               debitis iste cumque consequatur placeat distinctio maxime
               accusantium esse delectus libero incidunt doloribus, ea adipisci?
            </p>
            <button href="#">Get in touch</button>
            
            <div className="doings">
                <aside>
                    <h4>UI/UX DESIGN</h4>
                    <p>User Interface Design</p>
                    <p>Interaction Design</p>
                    <p>User Experience Thinking</p>
                    <p>Prototyping</p>
                    <p>Wireframing</p>
                </aside>
                <aside>
                    <h4>FRONTEND DEVELOPMENT</h4>
                    <p>HTML5/ CSS3</p>
                    <p>JQuery & JavaScript libraries</p>
                    <p>Responsive Design</p>
                    <p>Sass</p>
                    <p>Git / SVN</p>
                </aside>
                <aside>
                    <h4>TEAM BULDING</h4>
                    <p>Smiling</p>
                    <p>Communication</p>
                    <p>Team Working</p>
                    <p>Sharing my music</p>
                    <p>...more</p>
                </aside>
            </div>
            <span></span>
        </div>
    </div>
  )
}

export default About