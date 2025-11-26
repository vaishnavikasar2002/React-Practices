function Excercise() {
  let Name = "Anil Sidhu Todos";

  function callFun() {
    alert("function called");
  }

  return (
    <>
      <h1>{Name}</h1>
      <img
        src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg"
        alt="mau"
        width="300"
        height="400"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a moive sence</li>
        <li>Improve the spectrum tech</li>
      </ul>
      <button onClick={callFun}>click</button>
    </>
  );
}

export default Excercise;
