import { useState, useRef } from 'react';
import './App.scss';
import Header from "./src/Components/Header"
import Dropdown from "./src/Components/Dropdown"
import Ham from "./src/Components/Ham"

function App() {

  const [show, setShow] = useState(false)
  const toggleShow = ()=> {
    setShow(!show)
    console.log(show)
  }

  return (
    <div className="App">
      <Dropdown show={show} />
      <div >
      <Ham toggle={show} toggleShow={toggleShow} onClick={()=>{toggleShow()}}/>
        <Header />
      </div>

    </div>
  );
}

export default App;
