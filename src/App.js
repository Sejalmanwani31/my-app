// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import './App.css';
import Alert from './components/alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090a3f';
      showAlert("Dark mode enabled" , "success") ;
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled" , "success") ;
    }
  }
  return (
    <>
  <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element = {<Textform showalert = {showAlert} heading ="Enter The Text" mode={mode}/>}>

          </Route>
        </Routes>
  
   </div>
   </Router>
 

   </>
      
   
  );
}

export default App;
