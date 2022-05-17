
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

// Add state object to get data from inputs


class AddProduct extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //     }
    // }

    state = {
        _id: "",
        _name: "",
        _price: "",
        _quantity: "",
        _image: "",
        _description: ""
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
                    <div className="col-12 text-center">
                        <label htmlFor="inputImage" className="form-label ">Image</label>
                        <input value={this.state._image} name={"_image"} onChange={this.handelInput} type="text" className="form-control" id="inputImage" />
                    </div>
                    <div className="col-12">
                        {/* <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})} */}
                        <button onClick={() => this.props.AddProdFun({ id: this.state._id, name: this.state._name, price: this.state._price, quantity: this.state._quantity, image: this.state._image, description: this.state._description })}
                            className="btn btn-primary">Add Prodeuct
                        </button>
                    </div>
                </fieldset>
            </div>

        )
    }
}

export default AddProduct;
