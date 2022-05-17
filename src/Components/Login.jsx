import { Component } from "react";
import Cookies from "universal-cookie";
import Content from "./Home";

class Login extends Component {
    state = {
        adminData: {
            Name: "Mostafa",
            Pass: "123",
        },
        name: "",
        // username:"",
        password: "",
        // image:"",
        logInUser: false,
    }

    Cook = new Cookies();

    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // console.log(this.state.adminData);

    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log("Submited");
        // 1- Get values ==>> inputs.
        let logInObjectUser = {
            Name: this.state.name,
            Pass: this.state.password,
        }

        // console.log (JSON.stringify(logInObjectUser));
        this.Cook.set("Name",this.state.name);
        this.Cook.set("Pass",this.state.password);

        console.log(this.Cook.get("Pass"));
        
        // console.log(logInObjectUser);
        // console.log(this.state.adminData);
        // 2- Check ==>> Admin Object Data.
        // if (this.state.adminData.Name == logInObjectUser.Name && this.state.adminData.Pass == logInObjectUser.Pass) {
        if (this.state.adminData.Name == this.state.name && this.state.adminData.Pass == this.state.password) {
            this.setState({
                logInUser: true,
            })
            // console.log(this.state.logInUser);

        }
        // console.log(this.state.logInUser);
        // Redirect to App ==>> Admin
    }




    render() {
        this.Cook.get("Pass");
            this.Cook.get("Name");
        if (this.state.logInUser == false) {
            return (
                <>
                    <div className="container">
                        <form onSubmit={this.onSubmitHandler} className="text-center row g-3 container">
                            <legend className="">Login</legend>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input value={this.state.name} name={"name"} onChange={this.handleLogin} type="text" className="form-control" id="inputName" />
                            </div>
                            {/* <div className="col-md-6">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input value={this.state.userData.username} name={"_username"} onChange={this.handelInput} type="text" className="form-control" id="inputUsername" />
                    </div> */}
                            <div className="col-md-6">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input value={this.state.password} name={"password"} onChange={this.handleLogin} type="password" className="form-control" id="inputPassword" placeholder="" />
                            </div>
                            {/* <div className="col-6 text-center">
                        <label htmlFor="inputImage" className="form-label ">Image</label>
                        <input value={this.state.userData.image} name={"_image"} onChange={this.handelInput} type="text" className="form-control" id="inputImage" />
                    </div> */}
                            <div className="col-12">
                                {/* <button onClick={()=> props.AddProdFun({id:1, name:"First Product", price:"49", quantity:100, image:"1.jpg", description:"Good Item"})} */}
                                <button type="submit" className="btn btn-primary">
                                    LogIn
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <Content />
                </>
            )
        }
    }
}

export default Login;