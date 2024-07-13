// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import './App.css';
import Alert from './components/alert';
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
   <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
   <div className="container my-3">
   <Textform heading ="Enter The Text" mode={mode}/>
   {/* <About/> */}
   </div>
 

   </>
      
   
  );
}

export default App;
