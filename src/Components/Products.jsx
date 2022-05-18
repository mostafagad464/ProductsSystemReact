import { Component } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Login from "./Login";
import NotAuthorized from "./NotAuthorized";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        productsList: [],
        category: "",
    };

    onCategoryChangeHandler = (e) => {

        // console.log(e);
        this.setState({
            category: e.target.value
        })
    }


    AllProductsItems = () => {
        // console.log(this.props.data);
        this.state.productsList = this.props.data.map((item, i) => {
            if (item.category.includes(this.state.category) == true) {
                return (

                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                        <td><img src={`images/${item.image}`} alt={item.name} style={{ width: 30, height: 30 }} /></td>
                        <td>

                            {/* <a onClick={() =>{ this.props.removeProduct(i);}} className="btn btn-danger">Remove</a>
                            <a onClick={() =>{ this.props.productDetails(i); test();}} className="btn btn-success">Details</a> */}
                            <Link to={{ pathname: `/details/${item.id}`, data: item }}  className="btn btn-info">Details</Link>
                            <Link to={{ pathname: `/edit/${item.id}`, data: item, index: i }}  className="btn btn-success">Edit</Link>
                            {/* <Link onClick={()=>this.props.productDetails(i)} to={"/details/"+i} className="btn btn-success">Details</Link> */}

                            <input onClick={() => this.props.removeProduct(i)} type="button" className="btn btn-danger" value={"Remove"} />
                            {/* <input onClick={()=>this.props.productDetails(i)} type="button" className="btn btn-success" value={"Details"}  /> */}
                        </td>

                    </tr>
                )
            }
        }
        );
        return this.state.productsList;
    }

    // if (this.props.cooki.get("pass") == null && this.props.cooki.get("name") == null) {
    //     return (
    //         <NotAuthorized />
    //     )
    // }
    // else {

    render() {
        // console.log(this.AllProductsItems());
        if (this.props.cookie.get("name") != "Mostafa" && this.props.cookie.get("pass") != "123") {
            this.props.history.push("/login");
            return (
                <Login cookie={this.props.cookie} />
                // <NotAuthorized />
            );
        }
        else {
            // console.log(this.props);
            return (
                <>

                    {/* <AddProduct AddProdFun={this.props.AddProdFun} /> */}

                    <div className="container text-center">
                        <span>Choose Catgorey</span>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e) => this.onCategoryChangeHandler(e)}>
                            <option value="">All</option>

                            <option value="Phones">Phones</option>
                            <option value="Clothes">Clothes</option>
                            <option value="MakeUp">MakeUp</option>
                        </select>
                    </div>
                    <br />
                    <hr />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Discription</th>
                                <th scope="col">Image</th>
                                <th scope="col">Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.AllProductsItems()}
                        </tbody>
                    </table>
                    <br />
                    <hr />
                </>
            )
        }
    }
}


export default Products;
