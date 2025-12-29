// function Style() {
//     return (
//         <div style={{color:"blue",backgroundColor:"lightgray",padding:"3px"}}> 
//             <h1>Style Component</h1>
//         </div>
//     )
// }

// 2nd way 
function Style({children,color="black"}) {
    return (
        <div style={{color:color,backgroundColor:"lightgray",padding:"3px", margin: "10px"}}> 
            {children}
        </div>
    )
}

export default Style;