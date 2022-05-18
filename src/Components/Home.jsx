import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';
import React from 'react';
import Login from "./Login";
import Cookies from "universal-cookie";

let productObject = {
    id: 0,
    name: "",
    price: "",
    quantity: 0,
    image: "",
    description: ""
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            ProductsObj: [
                { id: 1, name: "First Product", price: "49", quantity: 100, image: "1.jpg", description: "Good Item" },
                { id: 2, name: "Sectond Product", price: "70", quantity: 88, image: "2.jpg", description: "New Item" },
                { id: 3, name: "Third Product", price: "35", quantity: 240, image: "3.png", description: "Item" }
            ],
            AddProductFlag: false,
            ProductIndex: 0,
        }

    }
    AddItem = (prod) => {
        alert("Function called");
        // this.state.ProductsObj.push(prod);
        let NewProductsArray = [...this.state.ProductsObj, prod];
        this.setState({
            ProductsObj: NewProductsArray,
            AddProductFlag: false,
        });
        console.log(NewProductsArray);
        // console.log(this.state.ProductsObj);


    }

    RemoveItem = (_ItemIndex) => {
        this.state.ProductsObj.splice(_ItemIndex, 1);
        this.setState({
            ProductsObj: this.state.ProductsObj,
        });
    }

    ItemDetails = (_ItemIndex) => {
        this.setState({
            ProductIndex: _ItemIndex,
        })
    }

    GoToAddProduct = () => {
        this.props.history.push("/products/add");
    };

    Cook = new Cookies();
    render() {
        console.log(this.props);



        if (this.state.AddProductFlag == false) {
            return (
                <>
                    <Header />

                    <div className="container">
                        {/* <Header /> */}
                        {/* <hr /> */}
                        <input onClick={() => this.setState({ AddProductFlag: true, })} AddProdFun={this.AddItem} type={"button"} value={"Add Product"} className='btn btn-primary' />
                        ||
                        <input onClick={this.GoToAddProduct} AddProdFun={this.AddItem} type={"button"} value={"Add Product Using Props"} className='btn btn-primary' />

                        <Products data={this.state.ProductsObj} AddProdFun={this.AddItem} RemoveProduct={this.RemoveItem} ProductDetails={this.ItemDetails} />
                        {/* <hr /> */}
                        {/* if (this.state.ProductIndex!=-1) */}
                        {/* { */}
                        {/* <ProductDetails data={this.state.ProductsObj[this.state.ProductIndex]} /> */}
                        {/* } */}
                        <hr />
                        {/* <Footer /> */}
                    </div>
                   <Footer />

                    <Router>
                        <Route />
                        <Route />
                        <Route />
                    </Router>
                </>
            );
        } 
        else { 
            // this.Cook.set("Pass","123");
            // this.Cook.set("Pass", "Ali");
            this.Cook.get("Pass");
            this.Cook.get("Name");
            return (

                <div className="container">
                    {/* <Header /> */}
                    <AddProduct AddProdFun={this.AddItem} />
                    <hr />
                    {/* <Footer /> */}
                </div>
            );
        }
    }
}


export default Home; 