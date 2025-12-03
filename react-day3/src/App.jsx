import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";
import Counter from './counter';

function App() {

  const [fruit, setFruit] = useState("Apple");
  const handleFruit=()=>{
    setFruit("Mango")
  }

  const [toggle, setToggle] = useState(true);

  const [count, setCount] = useState(0);

  return (
    <>
    <h1>State in react js </h1>
    <h3>{fruit}</h3>
    <button onClick={handleFruit}>Change fruit name</button>
    <Counter/>
    <hr></hr>

     <h1>Toggle Example</h1>
      {/*usestate true asel tr name show hoil fasle asel tr name show nhi honar */}
      {/* ternary op */}
      {toggle?<h2>Vaishnavi kasar</h2>:<h2>no user name</h2>}
      {/* or */}
      {/* {toggle?<h2>Vaishnavi kasar</h2>:null} */}

      {/* true asel tr false hoil flase asel tr true hoil */}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>

      <hr></hr>
      <h1>Multiple Condition in React</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Counter </button>
      {count==0?<h2>Count is zero</h2>:count==1?<h2>Count is one</h2>:count==2?<h2>Count is two</h2>:<h2>other condition</h2>}
    </>
  )
}


export default App
