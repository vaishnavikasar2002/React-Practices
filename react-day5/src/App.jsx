import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from "./Skills";


function App() {
  const [value, setValue] = useState("");

  const [name,setName] = useState("");
  const [pass,setPass] = useState("");
  const [email,setEmail] = useState("");
  return (
    <>
      <h1>Get Input field value</h1>
      <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} placeholder="Enter User Name" />
      <h3>{value}</h3>  {/* useState madhe value dili tr show hoil */}
      <button onClick={()=>setValue("")}>Clear Value</button>
      <hr /> 

      <h1>Controlled Component</h1>
      <form action="">
        <input  type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter User Name"></input>
        <br /> <br />
        <input  type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="Enter Password"></input>
        <br /> <br />
        <input  type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email"></input>
        <br /> <br />
        <button>Submit</button> 
        <button onClick={()=>{setName("");setPass("");setName("")}}> Clear</button>
        <h3>{name} </h3>
        <h3>{pass} </h3>
        <h3>{email} </h3>
      </form>

       <hr/>
       <h1>Handle Checkbox</h1>
       <Skills />
    </>
  )
}

export default App
