import Product from "./Product.jsx";

// topic: react props

// function ProductList() {
//     return (
//         <>
//           <Product title="phone" price={25000}  />
//           <Product title="laptop" price={750000}/>
//           <Product title="tv" price={150000}/>
        
//       </>
//     );
// }

// -------------------------------------------------------------------------------------------------------------

// topic : passing arr to props: 

// function ProductList() {
//   let lang = ["samgsung","apple" ,"1plus"];
//     return (
//         <>
//           <Product title="phone" price={25000} lang={lang} />
//           <Product title="laptop" price={750000}/>
//           <Product title="tv" price={150000}/>
        
//       </>
//     );
// }

// or

// function ProductList() {
//   let lang = ["samgsung","apple" ,"1plus"];
//     return (
//         <>
//           <Product title="phone" price={25000} lang={["samgsung","apple" ,"1plus"]} />
//           <Product title="laptop" price={750000}/>
//           <Product title="tv" price={150000}/>
        
//       </>
//     );
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// topic : rendering arrays , using map

// function ProductList() {
// let lang = ["samsung","apple","oneplus"];
//     return (
//         <>
//           <Product title="phone" price={25000} features={lang} />
//           <Product title="laptop" price={750000}/>
//           <Product title="tv" price={150000}/>
        
//       </>
//     );
// }

// or

// function ProductList() {
//   let lang = [<ul><li>"samsung"</li><li>"apple"</li><li>"oneplus"</li></ul>];
//     return (
//         <>
//           <Product title="phone" price={25000} features={lang} />
//           <Product title="laptop" price={750000}/>
//           <Product title="tv" price={150000}/>
        
//       </>
//     );
// }

// --------------------------------------------------------------------------------

// topic : Conditions

function ProductList() {
let lang = ["samsung","apple","oneplus"];
    return (
        <>
          <Product title="phone" price={25000}  />
          <Product title="laptop" price={750000}/>
          <Product title="tv" price={150000}/>
        
      </>
    );
}

export default ProductList;