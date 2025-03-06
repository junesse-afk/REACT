import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Viewer from './component/Viewer';
import Controller from './component/Controller';

function App() {

  const [num, setNum] = useState(0);
  const handleSetNum = (e) =>{
    setNum(num+e);
  }


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section class='viewer'>
      <Viewer num = {num}/>
      </section>
      <section class='controller'>
      <Controller handleSetNum = {handleSetNum}/>
      </section>
    </div>
  );
};

export default App;
