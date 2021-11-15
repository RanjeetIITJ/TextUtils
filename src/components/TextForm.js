import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("TextArea cleared!","success");
    }
    const handleCopy=()=>{
        // let text=document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!","success");
    }


    const[text, setText]=useState('');
    // text="new text"; wrong way to change
    // setText("new text"); correct way to change
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-2">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(20,44,63)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
