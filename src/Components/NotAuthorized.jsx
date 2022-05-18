import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class NotAuthorized extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    state = {}
    render() {
        return (
            <div className="alert alert-danger">
                <h1>Access Denied: Not Authorized</h1>
                <h2>Please Login: </h2>
                <Link to={"/login"} className="btn btn-outline-primary">Login</Link>
            </div>
        );
    }
}

export default NotAuthorized;
