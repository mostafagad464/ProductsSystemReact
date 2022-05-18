
// let AddProduct = (props) => {
//     console.log(props);
//     return (
//         <fieldset className="text-center row g-3">
//             <legend className="text-center">Add Product</legend>
//             {/* <form className="row g-3"> */}
//             <div className="col-md-6">
//                 <label htmlFor="inputName" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="inputName" />
//             </div>
//             <div className="col-md-6">
//                 <label htmlFor="inputDiscription" className="form-label">Discription</label>
//                 <input type="text" className="form-control" id="inputDiscription" />
//             </div>
//             <div className="col-md-4">
//                 <label htmlFor="inputId" className="form-label">Id</label>
//                 <input type="number" className="form-control" id="inputId" placeholder="" />
//             </div>
//             <div className="col-md-4">
//                 <label htmlFor="inputPrice" className="form-label">Price</label>
//                 <input type="number" className="form-control" id="inputPrice" placeholder="" />
//             </div>
//             <div className="col-md-4">
//                 <label htmlFor="inputQuantity" className="form-label">Quantity</label>
//                 <input type="number" className="form-control" id="inputQuantity" />
//             </div>
//             <div className="col-12">
//                 <label htmlFor="inputImage" className="form-label">Image</label>
//                 <input type="file" className="form-control" id="inputImage" />
//             </div>
//             <div className="col-12">
//                 {/* <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})} */}
//                 <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})}
//                         className="btn btn-primary">Add Prodeuct
//                 </button>
//             </div>
//             {/* </form> */}
//             <hr />
//         </fieldset>
//     )
// }
// export default AddProduct;


import React from "react";
import Cookies from "universal-cookie";
import { Component } from "react";
import NotAuthorized from "./NotAuthorized";

// Add state object to get data from inputs


class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    prod;

    addProd = () => {
        this.prod = {
            id: this.state._id, name: this.state._name, price: this.state._price,
            quantity: this.state._quantity, image: this.state._image,
            description: this.state._description
        };
        console.log(this.prod);
        this.props.AddProdFun(this.prod);
        this.props.history.push("/");
    }

    state = {
        _id: "",
        _name: "",
        _price: "",
        _quantity: "",
        _image: "",
        _description: "",
        _category: "",
    };

    handelInput = (eventObj) => {
        // console.log(eventObj);
        // console.log(eventObj.target.value);
        // console.log(eventObj.target._name);
        this.setState({
            [eventObj.target.name]: eventObj.target.value
        })
    };


    // Cook = new Cookies
    render() {
        // console.log(props);
        // props sent as property of the object.
        // This => refare to the component which created object => the tag we wrote in products.
        // console.log(this);
        // console.log(this.props);
        // this.Cook.get("Pass");
        // this.Cook.get("Name");
        if (this.props.cookie.get("name") != "Mostafa" && this.props.cookie.get("pass") != "123") {
            return (
                <NotAuthorized />
            );
        }
        else {
            console.log(this.props);

            return (
                <div className="container">
                    <fieldset className="text-center row g-3 ">
                        <legend className="">Add Product</legend>
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input value={this.state._name} name={"_name"} onChange={this.handelInput} type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputDiscription" className="form-label">Discription</label>
                            <input value={this.state._description} name={"_description"} onChange={this.handelInput} type="text" className="form-control" id="inputDiscription" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputId" className="form-label">Id</label>
                            <input value={this.state._id} name={"_id"} onChange={this.handelInput} type="number" className="form-control" id="inputId" placeholder="" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPrice" className="form-label">Price</label>
                            <input value={this.state._price} name={"_price"} onChange={this.handelInput} type="number" className="form-control" id="inputPrice" placeholder="" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputQuantity" className="form-label">Quantity</label>
                            <input value={this.state._quantity} name={"_quantity"} onChange={this.handelInput} type="number" className="form-control" id="inputQuantity" />
                        </div>
                        {/* <div className="col-12 text-center">
                            <label htmlFor="inputImage" className="form-label ">Image</label>
                            <input value={this.state._image} name={"_image"} onChange={this.handelInput} type="text" className="form-control" id="inputImage" />
                        </div> */}
                        <div className="col-6 text-center">
                            <label htmlFor="inputImage" className="form-label ">Image</label>
                            <select name={"_image"} id="inputImage" className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handelInput}>
                                <option value="1.jpg">1.jpg</option>
                                <option value="2.jpg">2.jpg</option>
                            </select>
                        </div>
                        <div className="col-6 text-center">
                            <label htmlFor="inputCategory" className="form-label ">Category</label>
                            <select  name={"_category"} id="inputCategory" className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handelInput}>
                                {/* <option value="">All</option> */}

                                <option value="Phones">Phones</option>
                                <option value="Clothes">Clothes</option>
                                <option value="MakeUp">MakeUp</option>
                            </select>
                        </div>
                        <div className="col-12">
                            {/* <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})} */}
                            <button onClick={()=> {
                                                this.props.history.push("/")
                                                this.props.addProdFun({ id: this.state._id, name: this.state._name, price: this.state._price, 
                                                                        quantity: this.state._quantity, image: this.state._image, 
                                                                        description: this.state._description, category:this.state._category })}
                                             }
                                    className="btn btn-primary">Add Prodeuct
                            </button>
                            {/* <a onClick={() => this.addProd()} className="btn btn-primary">Add Prodeuct</a> */}
                        </div>
                    </fieldset>
                    <a onClick={() => this.props.history.push("/")} className="btn btn-primary">Back to Products</a>
                </div>

            )
        }
    }
}

export default AddProduct;
