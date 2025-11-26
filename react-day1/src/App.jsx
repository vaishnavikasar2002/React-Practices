
import "./App.css";
import Fruit from "./Fruit";
import User from "./User";
import Excercise from "./excercise";

function App() {
  const userName ="Vaishnavi Kasar";
  let x = 5;
  let b = 10;
  return (
    <>
      <h1>{userName}</h1>
      <h1>{x + b}</h1>
      <Fruit />
      <User/>
      <hr></hr>
      <h3>Excercise</h3>
      <Excercise/>
    </>
  );
}

export default App;
