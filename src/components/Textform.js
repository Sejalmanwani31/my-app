import React, {useState} from 'react'



export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log('uppercase was clicked'+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick =()=>{
    let newText = '';
    setText(newText);
  }
  const handleOnChange= (event)=>{
    // console.log('onchange');
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleSpaces =() => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#090a3f':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode ==='dark'?'white':'black'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
