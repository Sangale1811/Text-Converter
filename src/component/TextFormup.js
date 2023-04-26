import React,{useState} from "react";

export default function TextFormup(props) {


const myStyle={
  color:"Black",
  fontFamily:"Arial, sans-serif",
  fontWeight:"bold",
  textAlign:"center",
  marginTop:"50px",
  fontSize:"40px",
}
const textArea={
  marginTop:"38px",
  lineHeight:"1.5",
  border:"2px solid #333",
  fontSize:"21px",
  padding:"10px",
  width:"70%",
  marginLeft:"190px"
}
// const paragraph={
//  marginLeft:"485px",
//  fontWeight:"bold",
//  color:"red"
// }

const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLoClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
}

const handleDownClick=()=>{
const element=document.createElement("a");
const file=new Blob([document.getElementById("myBox").value],{
  type: "text/plain;charset-utf-8",
});
element.href=URL.createObjectURL(file);
element.download="NewDocument.txt";
document.body.appendChild(element);
element.click();
};
const handleOnChange=(event)=>{
    setText(event.target.value);
}
const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  alert("Text copied to clipboard!")
}
  const[text,setText]=useState();

  return (
    <>
    <div className="container">
        <h1 style={myStyle}>{props.heading}</h1>
      <div className="mb-4">
        <textarea style={textArea}  className="form-control " placeholder="Type or paste your content here..." value={text} onChange={handleOnChange} id="myBox" rows="9" cols="40" ></textarea>
        <button className="btn btn-primary my-4 " style={{marginLeft:"350px"}}  onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-3 "  onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-2 "  onClick={handleDownClick}>Download File</button>
        <button className="btn btn-primary mx-2"  onClick={handleCopy}> Copy text </button>
        <button className="btn btn-primary mx-2"  onClick={()=>setText(' ')}>Clear</button>
        </div>
       {/* <div className="container">
        <h2 style={{marginLeft:"450px"}}>Your text summary</h2>
        <p style={paragraph} className="my-3">{text.split(" ").length} words and {text.length} characters</p> 
         </div>  */}
    </div>
    </>
  );
}

