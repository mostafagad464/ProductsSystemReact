

import React from "react";
import Cookies from "universal-cookie";
import { Component } from "react";
import NotAuthorized from "./NotAuthorized";


class EditProduct extends Component {
    constructor(props) {
        super(props)


    }

    state = {
        _id: this.props.location.data.id,
        _name: this.props.location.data.name,
        _price: this.props.location.data.price,
        _quantity: this.props.location.data.quantity,
        _image: this.props.location.data.image,
        _description: this.props.location.data.description,
        _category: this.props.location.data.category,
    };

    handelInput = (eventObj) => {
        this.setState({
            [eventObj.target.name]: eventObj.target.value
        })
    };
    render() {
        // console.log(this.props);
        if (this.props.cookie.get("name") != "Mostafa" && this.props.cookie.get("pass") != "123") {
            return (
                <NotAuthorized />
            );
        }
        else {
            console.log(this.state);
            return (
                <div className="container">
                    <fieldset className="text-center row g-3 ">
                        <legend className="">Edit Product</legend>
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input  value={this.state._name} name={"_name"} onChange={this.handelInput} type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputDiscription" className="form-label">Discription</label>
                            <input value={this.state._description} name={"_description"} onChange={this.handelInput} type="text" className="form-control" id="inputDiscription" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputId" className="form-label">Id</label>
                            <input disabled value={this.state._id} name={"_id"} onChange={this.handelInput} type="number" className="form-control" id="inputId" placeholder="" />
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
                            <select name={"_category"} id="inputCategory" className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handelInput}>
                                {/* <option value="">All</option> */}

                                <option value="Phones">Phones</option>
                                <option value="Clothes">Clothes</option>
                                <option value="MakeUp">MakeUp</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button onClick={() => {
                                this.props.history.push("/")
                                this.props.editProdRef({ id: this.state._id, name: this.state._name, price: this.state._price, quantity: this.state._quantity, image: this.state._image, description: this.state._description, category: this.state._category })
                            }
                            }
                                className="btn btn-primary">Save
                            </button>
                        </div>
                    </fieldset>
                    <a onClick={() => this.props.history.push("/")} className="btn btn-primary">Back to Products</a>
                </div>

            )
        }
    }
}

export default EditProduct;
