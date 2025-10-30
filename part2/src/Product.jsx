import "./Product.css";

//----topic1 :  React Props Properties

// function Product ( props) { // or function Product ({title,price,lang}) as pn write karu shaktat
//     console.log(props); // print object in console
//     console.log(props.title); // print title value in console ,eg phone ....
//     return (
//         <div className="Product">
//             {/* show product in output page */}
//             <h3>{props.title} </h3>
//             <h5>Price : {props.price}</h5>
//         </div>
//     );
// }

// -------------------------------------------------------------------------------------------------------------------------------------

//--- topic 2 : paasing arrays to props

// function Product ({title,price,features,features2}) {
//     console.log(features);//print array in the console
//     return (
//         <div className="Product">
//             <h3>{title} </h3>
//             <h5>Price : {price}</h5>
//             <p>{features}</p>  
//             <p>{features2.b}</p>
         
//         </div>
//     );
// } // print a array in console, op is ["samsung", "apple", "1plus"]

// -------------------------------------------------------------------------------------------------------------------------------------------------------

//--- topic3 : rendering arrays

// function Product ({title,price,features}) {
   
//     return (
//         <div className="Product">
//             <h3>{title} </h3>
//             <h5>Price : {price}</h5>
//             <p>{features}</p>  
//         </div>
//     );
// } 

//--- or using map method(mostly used method)

// function Product({title,price,features=[]}) {
//     const list = features.map((feature)=> <li>{feature}</li>);
 
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{list}</p>
//             {/* const list varti define n karta khali use kela 91 konta tri comment karaych */}
//            {/* <p>{features.map((feature)=>(<li>{feature}</li>))}</p>  */}
           
//         </div>
//     );
//     }

// ----------------------------------------------------------------------------------------------------------------------------------------------------

//--- Topic : Conditions - 1st way

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

//--- topic : conditions - 2nd best way

// function Product({title,price,features=[]}) {

//     let isDiscount = price >30000 ? "Discount of 10%" : ""; //ternary operator
   
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{isDiscount}</p>
           
//         </div>
//     );
   
// }


// ----TOPIC : Dynamic Component Styling--------------------------------------------------------------------------------------------------------

function Product({title,price,features=[]}) {
 
    let abc= {backgroundColor:price > 30000 ? "pink" : ""};//backgraund color vr condition apply keli
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