import { useState } from 'react';
import './App.scss';
import './Styles/main.css'

import Dropdown from "./Components/Dropdown"
import Ham from "./Components/Ham"

import Header from "./Components/Header"
import About from './Components/About';
import Works from './Components/Works';
import Touch from './Components/Touch'


function App() {

  const [show, setShow] = useState(false)
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
        <Touch />

    </div>
  );
}

export default App;
