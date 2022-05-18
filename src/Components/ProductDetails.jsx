import { Link } from "react-router-dom";
import NotAuthorized from "./NotAuthorized";
import Cookies from "universal-cookie";

let ProductDetails = (props) => {

    if (props.cookie.get("name") != "Mostafa" && props.cookie.get("pass") != "123") {
        return(
            <NotAuthorized />
        );
    }
    else{
        console.log("images/"+props.location.data.image);
        return (
            <>
                <div className="card container text-center" style={{ width: 500 }}>
                    <img src={"images/"+props.location.data.image} alt={props.location.data.name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.location.data.name}</h5>
                        <p className="card-text">{props.location.data.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.location.data.price}</li>
                        <li className="list-group-item">{props.location.data.quantity}</li>
                        <li className="list-group-item">{props.location.data.description}</li>
                    </ul>
                    <br />
                    <Link to={{ pathname: `/edit/${props.location.data.id}`, data: props.location.data }}  className="btn btn-success">Edit</Link>
                    <br />
                    <a onClick={() => props.history.push("/")} className="btn btn-primary">Back to Products</a>
                    <br />

                </div>
            </>
        )
    }
}

export default ProductDetails;