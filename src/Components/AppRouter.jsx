import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import Home from './Home'
import Login from './Login'
import ProductDetails from './ProductDetails'
import AddProduct from "./AddProduct";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import EditProduct from './EditProduct';
import NotAuthorized from './NotAuthorized';
import Cookies from "universal-cookie";

class AppRouter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            ApiData: "",
            case: "Updated",

            ProductsObj: [
                { id: 1, name: "First Product", price: "49", quantity: 100, image: "3.jpg", description: "Good Item", category:"Phones" },
                { id: 2, name: "Sectond Product", price: "70", quantity: 88, image: "2.jpg", description: "New Item", category:"Clothes" },
                // { id: 3, name: "Third Product", price: "35", quantity: 240, image: "3.jpg", description: "Item", category:"MakeUp" }
            ],
            AddProductFlag: false,
            ProductIndex: 0,
        }
        this.cook.set("name", "");
        this.cook.set("pass", "");
    }
    cook = new Cookies();

    AddItem = (prod) => {
        let NewProductsArray = [...this.state.ProductsObj, prod];
        this.setState({
            ProductsObj: NewProductsArray,
            AddProductFlag: false,
        });
    }
    EditItem = (prod) => {
        // let NewProductsArray = [...this.state.ProductsObj, prod];
        this.state.ProductsObj.forEach(element => {
            if(element.id==prod.id)
            {
                element.name=prod.name;
                element.price=prod.price;
                element.quantity=prod.quantity;
                element.description=prod.description;
                element.category=prod.category;
                element.image=prod.image;
            }
            
        });
        this.setState({
            // ProductsObj: NewProductsArray,
            AddProductFlag: false,
        });
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
    render() {
        // console.log(this.cook.get("name"));
        // console.log(this.cook.get("pass"));
        // console.log("Here ... ");
        // if (this.cook.get("name") == "" && this.cook.get("pass") == "") {
        //     console.log("Here in Login ");

        //     return (
        //         <Router>
        //             <Header cookie={this.cook} />
        //             <Route component={(props) => <Login cookie={this.cook}  {...props} />} path="/" />
        //             <Footer />
        //         </Router>
        //     )
        // }
        // else {
        // console.log("Here after Login ");

        return (

            <Router>
                <div className="container">
                    {/* Routes make oring => which render any route can match with asked path. */}
                    {/* Use Exact to prevent this feature */}

                    {/* <Route component={Login} path="/" /> */}

                    {/* <Route component={Home} path="/" exact /> */}
                    {/* <Route component={Home} path="/" />
                            <Route component={Products} path="/products" />
                            <Route component={AddProduct} path="/products/add" />
                            <Route component={EditProduct} path="/products/edit/:id" />
                            <Route component={ProductDetails} path="/products/details/:id" /> */}

                    {/* <Route component={Home} path="/" /> */}
                    {/* <Route component={(props) => <Login {...props} />} path="/login" /> */}
                    {/* <Route component={(props) => <Login {...props} />} path="/" exact/> */}
                    {/* <Route component={(props) => <Login {...props} />} path="/login" /> */}

                    <Header cookie={this.cook} />
                    <Route component={
                        (props) =>
                            <Products
                                data={this.state.ProductsObj}
                                addProdFun={this.AddItem}
                                removeProduct={this.RemoveItem}
                                productDetails={this.ItemDetails}
                                cookie={this.cook}
                                {...props} BOMProp={props} />
                    }
                        path="/" exact
                    />
                    <Route component={(props) => <Login cookie={this.cook} {...props}  />} path="/login" />

                    <Route component={(props) => <AddProduct addProdFun={this.AddItem} cookie={this.cook} {...props} />}
                            path="/add"
                    />
                    <Route
                        component={(props) =>
                            <EditProduct
                                editProdRef={this.EditItem}
                                cookie={this.cook}
                                {...props}
                            />}
                        path="/edit/:id"
                    />
                    <Route
                        component={(props) =>
                            <ProductDetails
                                cookie={this.cook}
                                {...props}
                            />}
                        path="/details/:id"
                    />
                    <Route
                        component={(props) =>
                            <NotAuthorized
                                cookie={this.cook}
                                {...props}
                            />}
                        path="NotAuthorized"
                    />


                    {/* <Route component={() => <AddProduct />} path="/products/add" /> */}

                    {/* <Route component={() => {
                    return (
                        <div>Test route</div>
                    )}}
                    path="test"
                /> */}
                    {/* <Route /> */}

                    <Footer />
                </div>
            </Router>
        );
        // }
    }
}


export default AppRouter;