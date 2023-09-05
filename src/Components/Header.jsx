import React from 'react'
import "../Styles/Header.scss"
import ScrollIntoView from 'react-scroll-into-view'
import { ArrowRight2 } from './Icons'


const Header = () => {
  return (
    <header className="heading">
      <div className="container">
        <div className="heading__cont">
          <h4>Hi, my name is </h4>
          <h1>David Arifalo</h1>
          <p>I'm a Front-End Developer.</p>
          <h6>
            I'm a front-end developer that specializes in crafting pleasing,
            responsive web UIs to satisfy business and customer needs. 💪🏽
          </h6>
          <ScrollIntoView selector=".project__main">
            <button>
              View My Doings <ArrowRight2 />{" "}
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </header>
  );
}

export default Header