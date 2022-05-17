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
import Content from "./Home";

class AppRouter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            ApiData: "",
            case: "Updated",

        }
    }
    state = {}
    render() {
        return (
            <Router>
                {/* Routes make oring => which render any route can match with asked path. */}
                {/* Use Exact to prevent this feature */}

                {/* <Route component={Login} path="/" /> */}
                <Header />

                {/* <Route component={Home} path="/" exact /> */}
                <Route component={Home} path="/" />
                <Route component={Products} path="/products" />
                <Route component={AddProduct} path="/products/add" />
                <Route component={ProductDetails} path="/products/details/:id" />
                
                {/* <Route component={() => <AddProduct />} path="/products/add" /> */}

                {/* <Route component={() => {
                    return (
                        <div>Test route</div>
                    )}}
                    path="test"
                /> */}
                {/* <Route /> */}

                <Footer />
            </Router>
        );
    }
}


export default AppRouter;