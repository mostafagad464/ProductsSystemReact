import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import AddProduct from './Components/AddProduct';
import React from 'react';
import Home from './Components/Home';

// let productObject = {
//   id: 0,
//   name: "",
//   price: "",
//   quantity: 0,
//   image: "",
//   description: ""
// }

// function App() {
//   let ProductsObj=[
//     {id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"},
//     {id:2, name:"Sectond Product", price:"70", quantity:88, image:"2.jpg", description:"New Item"},
//     {id:3, name:"Third Product", price:"35", quantity:240, image:"3.png", description:"Item"}
//   ];

//   let AddItem= (prod)=>{
//     alert("Function called");
//     // let newitem = {id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"};
//     // ProductsObj.push(newitem);
//     ProductsObj.push(prod);
//     console.log(ProductsObj);
//   }
//   return (
//     // <div className='container'>
//     // the content nust wrraped with tag in app tag if you use html tags and component tags
//     // to you can use three ways
//     // wrrap it in <div></div> tag
//     // or: React provide fragment tag =>> <React.Fragment></React.Fragment> which exists on react lib
//     // or: we can use name less tag =>> <></>
//     <div className="container">
//       <Header />
//       <Products data={ProductsObj} AddProdFun={AddItem} />
//       {/* <hr /> */}
//       {/* <AddProduct /> */}
//       <hr />
//       <ProductDetails data={ProductsObj[0]}/>
//       <hr />
//       <Footer />
//     </div>
//     // </div>
//   );
// }
// ========================================================================================================

// Day 2

// To use state object which handle change in data to render new data and display it in UI.
// we must change function to class.
// This class will render jsx => so we need to extend this class from react component class. 
// The first function we must define or override => render function to return jsx
// State object is respociable for render new data => it get initail data and assign the deferance when chande happen to render new data.


class App extends React.Component {
  constructor() {
    super();
    // this.ProductsObj = [
    //   { id: 1, name: "First Product", price: "49", quantity: 100, image: "1.jpg", description: "Good Item" },
    //   { id: 2, name: "Sectond Product", price: "70", quantity: 88, image: "2.jpg", description: "New Item" },
    //   { id: 3, name: "Third Product", price: "35", quantity: 240, image: "3.png", description: "Item" }
    // ];
    // First step => put data in state object to wrrap data (Initailize state object)
    // this.state = {
    //   ProductsObj: [
    //     { id: 1, name: "First Product", price: "49", quantity: 100, image: "1.jpg", description: "Good Item" },
    //     { id: 2, name: "Sectond Product", price: "70", quantity: 88, image: "2.jpg", description: "New Item" },
    //     { id: 3, name: "Third Product", price: "35", quantity: 240, image: "3.png", description: "Item" }
    //   ],
    //   AddProductFlag:false,
    //   ProductIndex:0,
    // }

  }
  // Second step => when you want to change => create function to reinitialize the property of the state.
  // this done through function called => SetState() 
  // AddItem = (prod) => {
  //   alert("Function called");
  //   // this.state.ProductsObj.push(prod);
  //   let NewProductsArray = [...this.state.ProductsObj, prod];
  //   this.setState({
  //     ProductsObj: NewProductsArray,
  //     AddProductFlag:false,
  //   });
  //   console.log(NewProductsArray);
  //   // console.log(this.state.ProductsObj);
  // }

  // RemoveItem = (_ItemIndex) => {
  //   this.state.ProductsObj.splice(_ItemIndex, 1);
  //   this.setState({
  //     ProductsObj: this.state.ProductsObj,
  //   });
  // }

  // ItemDetails = (_ItemIndex)=>{
  //   this.setState({
  //     ProductIndex:_ItemIndex,
  //   })
  // }

  render() {
    // return (
    //   // the content nust wrraped with tag in app tag if you use html tags and component tags
    //   // to you can use three ways
    //   // wrrap it in <div></div> tag
    //   // or: React provide fragment tag =>> <React.Fragment></React.Fragment> which exists on react lib
    //   // or: we can use name less tag =>> <></>
    //   <div className="container">
    //     <Header />
    //     <Products data={this.state.ProductsObj} AddProdFun={this.AddItem} RemoveProduct={this.RemoveItem} />
    //     <hr />
    //     {/* <ProductDetails data={this.state.ProductsObj[0]} /> */}
    //     <hr />
    //     <Footer />
    //   </div>
    // );

    // To show products in view and add product in seperatong view 


    // <Login />
    //   if (this.state.AddProductFlag == false) {
    //     return (
    //       <div className="container">
    //         {/* <Header /> */}
    //         {/* <hr /> */}
    //         <input onClick={()=>this.setState({AddProductFlag:true,})} type={"button"} value={"Add Product"} className='btn btn-primary' />
    //         <Products data={this.state.ProductsObj} AddProdFun={this.AddItem} RemoveProduct={this.RemoveItem} ProductDetails={this.ItemDetails} />
    //         {/* <hr /> */}
    //         {/* if (this.state.ProductIndex!=-1) */}
    //         {/* { */}
    //           <ProductDetails data={this.state.ProductsObj[this.state.ProductIndex]} />
    //         {/* } */}
    //         <hr />
    //         {/* <Footer /> */}
    //       </div>
    //     );
    //   }
    //   else {
    //     return (

    //       <div className="container">
    //         <Header />
    //         <AddProduct AddProdFun={this.AddItem} />
    //         <hr />
    //         <Footer />
    //       </div>
    //     );
    //   }

    return (


      <>
        {/* <Home /> */}
      </>
    )
  }

}

export default App;
