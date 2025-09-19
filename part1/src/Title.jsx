// function Title() { 
//   return (
//     <div>
//         <h1>I am the Title!</h1>
//         <h3>I am a Description!</h3>
//     </div>   
//   );
// }


export default Title;

// ----------------------------------------------------------------------------------------
// JSX with curly Braces
function Title() { 
    let name = "vaishnavi";
  return (
    <div>
        <h2>2 * 2 = {2 * 2}</h2>
        <h3>Hi , {name.toUpperCase()}</h3>
    </div>   
  );
}