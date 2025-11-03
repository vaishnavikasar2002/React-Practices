// ---topic 1 - Event Handling in React---

// function printHey() {
//     console.log("Hey!"); //in console , click me par click karne per hey print hoga
// }

// function printBye() {
//     console.log("Bye!"); // same as printHey
// }

// function Button () {
//     return (
//         <div>
//             <h1> Topic - Event Handling in React</h1>    
//             <button onClick={printHey} >Click Me</button>
//             <p onClick={printBye}>Lorem ipsum dolor sit amet.</p>
//         </div>       
//     )
// }

// --------------------------------------------------------------------------------------------------------------------------

// ----topic 2 = handling non-click events

function handleMouseOver() {
    console.log("Bye!");
}

function handleDblClick() {
    console.log("you double clicked!");
}


function Button () {
    return (
        <div>
            <h1> topic - handling non-click events</h1>
           <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed nulla, hic distinctio nisi temporibus culpa necessitatibus odio? Ad, debitis.</p>
           <button onDoubleClick={handleDblClick}>You double click</button> 


        </div>       
    )
}            


 export default Button;