import { useState } from 'react';
import { useRef } from 'react';
import './App.scss';
import './Styles/main.css'

import Dropdown from "./Components/Dropdown"
import Ham from "./Components/Ham"
import Cursor from "./cursor/components/DotRing/DotRing"
import { ChangeCursor2 } from './cursor/hooks/ChangeCursor'


import Header from "./Components/Header" 
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects'
import Footer from "./Components/Footer"
import Modal from "./Components/Modal"



function App() {

  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const toggleShow = ()=> {
    setShow(!show)
  }

  ChangeCursor2()

  return (
    <div className="App">

      <Cursor />
      {/* <Dropdown show={show} setShow={setShow} />
      <Ham toggle={show} toggleShow={toggleShow} onClick={()=>{toggleShow()}}/> */}
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
