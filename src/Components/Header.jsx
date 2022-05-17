import { Link } from "react-router-dom";

let Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                    <span className="fs-4">React Lap1</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/"} className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to={"/products"} className="nav-link">Products</Link></li>
                    <li className="nav-item"><Link to={"/products/add"} className="nav-link">Add Product</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;
