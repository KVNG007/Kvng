import React from 'react'
import "../Styles/Header.scss"

const Header = () => {
  return (
    <header className='heading'>
      <div className="container">
          <h1>David Arifalo</h1>
          <p>UI / UX / FRONTEND</p>
          <button type="submit" href="#">Download Resume</button>
      </div>
    </header>
  )
}

export default Header