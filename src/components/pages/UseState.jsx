import React, { useState } from 'react'



function UseState() {

  const [count, setcount] = useState(0)
  const [text, settext] = useState("Nothing")

  const changeHanlder = (event)=>{
      settext(event.target.value)
  }

  const uppperCase = ()=>{

    let changeUpperCase = text.toUpperCase();
    settext(changeUpperCase);
    alert("change uppercase")

  }

  const clearText = ()=>{
    let emptytext = "";
    settext(emptytext)
    alert("Clear text")
  }

  const copy = ()=>{
      navigator.clipboard.writeText(text)
      alert("copied text")
  }

   const undotext = ()=>{
      settext(text.slice(0, -1))
  }



  return (
    <>
    
    <div className="container p-5">

      <h2><b><u>Counter: {count}</u></b></h2>
      <button className='btn btn-warning' onClick={()=>setcount(count - 1)} >Click to Increase Counter</button>
      <br /><br />

      <label htmlFor="">Type Your Message:</label>
      <textarea placeholder='Type here....' className='form-control mt-3' onChange={changeHanlder} value={text}></textarea>

      <button className='btn btn-warning m-2' onClick={uppperCase}>Convert to Uppercase</button>
      <button className='btn btn-warning m-2' onClick={copy}>Convert to Copy</button>
      <button className='btn btn-warning m-2' onClick={clearText}>Convert to Clear</button>
      <button className='btn btn-warning m-2' onClick={undotext}>Undo</button>


      <h5 className='mt-2'><b><u>Character: {text.length}</u></b></h5>

      <h3 className='mt-2'><b><u>Preview:</u></b></h3>
      <p className='mt-3'>{text}</p>


    </div>

   
    
    



    </>
  )
}

export default UseState