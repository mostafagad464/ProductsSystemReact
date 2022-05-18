import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie";

let Header = (props) => {


    let LogOut = ()=>{
        
        props.cookie.remove("name");
        props.cookie.remove("pass");
        console.log(props); 
        // props.history.push("/");
        
    }
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                    <span className="fs-4">React Laps</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/"} className="nav-link" >Home</Link></li>
                    {/* <li className="nav-item"><Link to={"/"} className="nav-link">Products</Link></li> */}
                    <li className="nav-item"><Link to={"/add"} className="nav-link">Add Product</Link></li>
                    <li className="nav-item">
                        {/* <Link to={pathname="/" } className="nav-link">Add Product</Link></li> */}
                        {/* <input type={"button"} onClick={LogOut} className="nav-link active " aria-current="page" value={"LogOut"} /> */}

                        <Link onClick={LogOut} to={"/login"} className="nav-link active">LogOut</Link>
                        {/* <Link onClick={LogOut} to={"/login"} className="nav-link active">LogOut</Link> */}
                        {/* <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/> */}
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;
