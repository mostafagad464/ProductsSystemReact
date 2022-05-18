import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import ProductDetails from './ProductDetails'
import AddProduct from "./AddProduct";
import Products from "./Products";
import EditProduct from './EditProduct';
import NotAuthorized from './NotAuthorized';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminData: {
                Name: "Mostafa",
                Pass: "123",
            },

            name: "",
            password: "",
            logInUser: false,

            ProductsObj: [
                { id: 1, name: "First Product", price: "49", quantity: 100, image: "1.jpg", description: "Good Item", category: "Phones" },
                { id: 2, name: "Sectond Product", price: "70", quantity: 88, image: "2.jpg", description: "New Item", category: "Clothes" },
                { id: 3, name: "Third Product", price: "35", quantity: 240, image: "1.jpg", description: "Item", category: "MakeUp" }
            ],
            AddProductFlag: false,
            ProductIndex: 0,
        }
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
        let NewProductsArray = [...this.state.ProductsObj, prod];
        this.setState({
            ProductsObj: NewProductsArray,
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

    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleLogout = (e) => {
        this.setState({
            logInUser: false,
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Submited");
        // 1- Get values ==>> inputs.
        let logInObjectUser = {
            Name: this.state.name,
            Pass: this.state.password,
        }
        this.cook.set("name", this.state.name);
        this.cook.set("pass", this.state.password);
        // 2- Check ==>> Admin Object Data.
        // if (this.state.adminData.Name == logInObjectUser.Name && this.state.adminData.Pass == logInObjectUser.Pass) {
        if (this.state.adminData.Name == this.state.name && this.state.adminData.Pass == this.state.password) {
            this.setState({
                logInUser: true,
            })
        }
        this.props.history.push("/");
    }
    // Redirect to App ==>> Admin
    render() {
        // if (this.state.logInUser == false) {
        // if (this.cook.get("name") == null && this.cook.get("pass") == null) {
        // console.log(this);
        // console.log(this.props);
        // if (this.props.cookie.get("name") == "Mostafa" && this.props.cookie.get("pass") == "123") {
        //     return (
        //         <Products />
        //     );
        // }
        return (
            <>
                {/* <Header cooki={this.cook} /> */}
                <main className="container form-signin w-100 col-md-4 col-md-offset-4">
                    {/* <form onSubmit={this.onSubmitHandler} className="text-center row g-3 container"> */}
                    <div className="container col-md-6 col-md-offset-6">
                        <h1 className="h3 mb-3 fw-normal ">Login</h1>
                        <div className=" form-floating ">
                            <input value={this.state.name} name={"name"} onChange={this.handleLogin} type="text" className="form-control" id="inputName" />
                            <label htmlFor="inputName" className="form-label">Name</label>
                        </div>
                        <br />
                        <div className="form-floating ">
                            <input value={this.state.password} name={"password"} onChange={this.handleLogin} type="password" className="form-control" id="inputPassword" placeholder="" />
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                        </div>
                        <br />
                        <Link onClick={this.onSubmitHandler} to={"/"} className="w-100 btn btn-lg btn-primary">LogIn</Link>
                    
                    </div>

                    {/* <div className="col-12"> */}
                    {/* <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})} */}
                    {/* <button type="submit" className="btn btn-primary">
                                    LogIn
                                </button> */}

                    {/* </div> */}
                    {/* </form> */}
                </main>
                {/* <Footer /> */}

            </>
        );
        // }
        // else {
        //     return (
        //         <>
        //             <Router >
        //                 <div className="container">
        //                     <Header cooki={this.cook} />
        //                     <Route component={
        //                         (props) =>
        //                             <Products
        //                                 data={this.state.ProductsObj}
        //                                 addProdFun={this.AddItem}
        //                                 removeProduct={this.RemoveItem}
        //                                 productDetails={this.ItemDetails}
        //                                 cooki={this.cook}
        //                                 {...props} BOMProp={props} 
        //                             />}
        //                         path="/" exact
        //                     />
        //                     <Route
        //                         component={(props) =>
        //                             <AddProduct
        //                                 addProdFun={this.AddItem}
        //                                 cooki={this.cook}
        //                                 {...props}
        //                             />}
        //                         path="/add"
        //                     />
        //                     <Route
        //                         component={(props) =>
        //                             <EditProduct
        //                                 editProdRef={this.EditItem}
        //                                 cooki={this.cook}
        //                                 {...props}
        //                             />}
        //                         path="/edit/:id"
        //                     />
        //                     <Route
        //                         component={(props) =>
        //                             <ProductDetails
        //                                 cooki={this.cook}
        //                                 {...props}
        //                             />}
        //                         path="/details/:id"
        //                     />
        //                     <Route
        //                         component={(props) =>
        //                             <NotAuthorized
        //                                 cooki={this.cook}
        //                                 {...props}
        //                             />}
        //                         path="/notauthorized"
        //                     />
        //                     <Footer />
        //                 </div>
        //             </Router>

        //         </>
        //     )
        // }
    }
}

export default Login;