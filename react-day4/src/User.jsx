// passing props

// function User({name, age, branch }) {
//     return (
//         <div>
//            <h2>Name : {name}</h2>    
//            <h2>Branch : {branch}</h2>
//            <h2>Age : {age}</h2>
//         </div>
//     )
// }

// passing object as props
function User({info}) {
    return (
        <div>
            <hr />
           <h2>Name : {info.name}</h2>    
           <h2>Branch : {info.branch}</h2>
           <h2>Age : {info.age}</h2>
        </div>
    )
}

export default User;