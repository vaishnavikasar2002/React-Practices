import "./Product.css";

//topic :  React Props Properties

// function Product ( props) {
//     console.log(props); // print object in console
//     console.log(props.title); // print title value in console ,eg phone ....
//     return (
//         <div className="Product">
//             <h3>{props.title} </h3>
//             <h5>Price : {props.price}</h5>
//         </div>
//     );
// }

// -------------------------------------------------------------------------------------------------------------------------------------

// // topic : paasing arrays to props

// function Product ({title,price,lang}) {
//     console.log(lang);
//     return (
//         <div className="Product">
//             <h3>{title} </h3>
//             <h5>Price : {price}</h5>
//             <p>{lang}</p>  
//         </div>
//     );
// } // print a array in console, op is ["samsung", "apple", "1plus"]

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// topic : rendering arrays

// function Product ({title,price,features}) {
   
//     return (
//         <div className="Product">
//             <h3>{title} </h3>
//             <h5>Price : {price}</h5>
//             <p>{features}</p>  
//         </div>
//     );
// } 

// or

// function Product({title,price,features=[]}) {
//     const list = features.map((feature)=> <li>{feature}</li>);
 
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{list}</p>
//             {/* <ul>
//                 {features.map((item, index) => <li key={index}>{item}</li>)}
//            </ul> */}
           
//         </div>
//     );
//     }

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Topic : Conditions - 1st way

// function Product({title,price,features=[]}) {
 
//         if(price>30000) {
//          return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>Discount of 10%</p>  
//         </div>
//     );
//     } else { 
//          return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//         </div>
//     );
//     }
   
//     }

// or

// topic : conditions - 2nd best way

// function Product({title,price,features=[]}) {

//     let isDiscount = price >30000 ? "Discount of 10%" : ""; //ternary operator
   
//     return (
//         <div className="Product" style={abc}>
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{isDiscount}</p>
           
//         </div>
//     );
   
// }


// ------------TOPIC : Dynamic Component Styling--------------------------------------------------------------------------------------------------------
function Product({title,price,features=[]}) {
 
    let abc= {backgroundColor:price > 30000 ? "pink" : ""};
    let isDiscount = price >30000 ? "Discount of 10%" : ""; //ternary operator
   
    return (
        <div className="Product" style={abc}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{isDiscount}</p>
           
        </div>
    );
   
}

export default Product;