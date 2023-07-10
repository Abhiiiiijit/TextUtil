import React,{useState} from 'react'

export default function TextForm(props) {
  // const [text, setText] = useState("Enter your text here");
  // const [text, setText] = useState();
  const [text, setText] = useState("");
  const handleUpper = ()=>{
    let ntext = text.toUpperCase();
    setText(ntext);
    props.showAlert("Converted to UpperCase","success");
  } 
  const handleLower = ()=>{
    let netext = text.toLowerCase();
    setText(netext);
    props.showAlert("Converted to LowerCase","success");
  } 
  const handleClear = ()=>{
    alert("Are you sure you want to clear the text?");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Has been Cleared","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleCopy = ()=>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Successfully Copied to Clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed !!!","success");
  }
  return (
    <>
    
    <div className="container">
        {/* <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">{props.email}</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <div className="mb-3">
        <h3><label htmlFor="myBox" className="form-label">{props.name}</label></h3>
        <textarea value={text} className="form-control" onChange ={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
        {/* style ={{backgroundColor:props.Mode === 'dark'?'grey':'white'}} */}
        </div>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpper}>Convert to Uppercase</button> 
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLower}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>
    
    <div className="container my-3">
      <details>
        <summary><b>Features</b></summary>
      <details>
        <summary><b>Preview</b></summary>
        <p>{text}</p>
      </details>
      <h4 className="my-2">Word Count</h4>
      <div className="container my-2 mx-3">
        <p>Word:- {text.split(" ").length-1}</p>
        <p>Character:- {text.length}</p>
      </div>
      <h4 className="my-2">Time taken to Read:-</h4>
      <div className="container my-2 mx-3">
        <h6>Slow Reader(0.008 min per Word):- </h6>
        <p>{0.008*text.split(" ").length} Min Required</p>
        <h6>Average Reader(0.00032 min per Word):-</h6>
        <p>{0.00032*text.split(" ").length} Min Required</p>
      </div>
      </details>
    </div>
    
    </>
  )
}
