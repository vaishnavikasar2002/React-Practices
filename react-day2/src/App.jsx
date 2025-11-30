import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const name = "mau"; //ternary op

  let a = 5;
  let b = 10;

  const userObj ={
    name:"vaishnavi kasar",
    gmail: "vaishnavi282@gmail.com",
    age : 23

  }

  let path = "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg" 
  ; 

  const userArr = ["mauu","vaishnavi","asfkb"]

  function fruit(){
    return "apple"
  }

  function sum(a,b){
    return a-b;
  }

  function operation(a,b,op){
    if(op == "+"){
      return a+b;
    }else if(op == "-"){
      return a-b;
    } else {
      return a*b
    }
  }

  // click event code

  // normal funtion
  function clickCode(){
    alert("My name is vaishnavi")
  }

  //arrow fuction
  const snacksItem=()=>{
    alert("panipuri")
  }

  //another way 
  const snacksItem1=(name)=>{
    alert(name)
  }



  return (
    <>
    <h1>JSX with Curly Braces</h1>
    {/* <h3>{name}</h3> */}
    {/* ternary op */}
    <h3>{name?name:"user not found"}</h3>
    <h3>{a+b}</h3>
    <h3>{fruit()}</h3>
    <h3>{sum(20,15)}</h3>
    <h3>{operation(2,5,"*")}</h3>
    <h3>{userObj.gmail}</h3>
    <h3>{userArr[1]}</h3>
    <h3><img src={path} alt="cat" width="300" height = "300"/></h3>
    <input type="text" value={name} />
    <hr/>

    <h1>Click event and function call</h1>
    <button onClick={clickCode}>Click me</button> <nbsp></nbsp>
    <button onClick={snacksItem}>touch me</button> <nbsp></nbsp>
    <button onClick={()=>snacksItem1("Pizza")}>Pizza</button> <nbsp></nbsp>
    <button onClick={()=>snacksItem1("Momoso")}>momoso</button> <nbsp></nbsp>
    </>
    
    
  )
}



export default App
