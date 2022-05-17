import AddProduct from "./AddProduct";

let Products = (props) => {
    //  .log(props.data);
    let AllProductsItems = props.data.map((item,i)=>{
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td><img src={`images/${item.image}`} alt={item.name} style={{width:30, height:30}} /></td>
                <td>
                    <input onClick={()=>props.RemoveProduct(i)} type="button" className="btn btn-danger" value={"Remove"}  />
                    <input onClick={()=>props.ProductDetails(i)} type="button" className="btn btn-success" value={"Details"}  />
                </td>

                {/* RemoveProduct */}
            </tr>
        )
    })

    

    return (
        <>

            {/* <AddProduct AddProdFun={props.AddProdFun} /> */}

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
                    {AllProductsItems}
                </tbody>
            </table>
        </>
    )

}


export default Products;
