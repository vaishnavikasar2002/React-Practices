import UserCard from "./UserCard"
import './App.css'
import vaishnavi from "./assets/vaishnavi.jpg"
import rahul from "./assets/rahul.jpg"
import asmita from "./assets/asmita.jpg"

function App() {


  return (
  
      <div className="container" style={{"border-radius":"10px"}}>
        {/* <h1>Hello Everyone !</h1>  */}
        <UserCard name="Vaishnavi Kasar" img={vaishnavi} desc="Profile photo of Vaishnavi Karar, She is MERN STACK Devloper" Skills="JavaScript, Node.js, MongoDB" Email="vaishnavi@gmail.com" GitHub="github.com/vaishnavi"/>
        <UserCard name="Chetan Pawar" img={rahul} desc="Profile photo of Chetan Pawar,He is Data Science" Skills="Python, Machine Learing, React" Email="chetan2@gmail.com" GitHub="github.com/chetan"/>
        <UserCard name="Asmita Patil" img={asmita} desc="Profile photo of Asmita Patil , She is Teacher" Skills="Math, History, English " Email="asmita45@gmail.com" GitHub="github.com/asmita"/>
       </div>
    
  )
}

export default App
