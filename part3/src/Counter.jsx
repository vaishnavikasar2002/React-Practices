
// topic = state in react

// function Counter() {
//     let count = 0;

//     function incCount() {
//         count += 1;
//         console.log("Count:", count); //value increase hoil in console
//     }

//     return (
//         <div>
//             <h1>State in React</h1>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     )
// }

// ----------------------------------------------------------------------

//---- topic = useState() (ul chya basevr change pahije teva state use karto for ex DOM)

import  { useState } from "react";
function Counter () {

    let [count, setCount] = useState(0); // 0 is initial value     //  yaha count ek state variable hai, aur setCount use update karne ke liye function hai
    console.log("component is re-executed");
    console.log(`count = ${count}`);
    let incCount = () =>{
        // setCount(count+1);
        // or
        // setCount(count+2);//incease by 2

//------- topic callback in update function
        setCount((currCount) => {
             return currCount + 1;
        });

        setCount((currCount) => {
             return currCount + 1;  // increase by 2 bec 2 da use kela fun
        });

        // setCount(30); //always value 30 set hoga
    };

    return (
        <div>
            <hr></hr>
            <h1>useState</h1>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase count</button>
        </div>

    )
}



// code explain kiya hai
// useState(0) → yeh count ki initial value 0 set karta hai.
// setCount(count + 1) → jab button click hota hai, toh count increase hota hai.
// setCount → ye function React ko batata hai ki state change ho gayi hai, and component ko re-render karna chahiye.
// count → ye current value of the counter hai.


//explanation og hooks n useState
// React mein hooks ek naya feature hai jo functional components ko powerful banata hai. 
// Pehle sirf class components mein state ya lifecycle methods use hote the, but ab hooks ki wajah se functional components bhi yeh sab kar sakte hain.

// useState ek hook hai jo humein state manage karne ka feature deta hai functional component ke andar.


export default Counter;