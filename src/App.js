import { useState, useEffect, useRef } from 'react';
import './App.scss';
import './Styles/main.css'

import Dropdown from "./Components/Dropdown"
import Ham from "./Components/Ham"

import Header from "./Components/Header" 
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects'
import Footer from "./Components/Footer"
import Modal from "./Components/Modal"



function App() {

  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)


  const toggleShow = ()=> {
    setShow(!show)
  }

  return (
    <div className="App">
      <Dropdown show={show} />
      <Ham toggle={show} toggleShow={toggleShow} onClick={()=>{toggleShow()}}/>
      <Header />
      <About />
      <Works />
      <Projects />
      <Footer setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}/>

    </div>
  );
}

export default App;
