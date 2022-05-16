
let ProductDetails = (props)=>{
    return (
        <div className="card" style={{width: 250}}>
            <img src={`images/${props.data.image}`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.data.price}</li>
                <li className="list-group-item">{props.data.quantity}</li>
                <li className="list-group-item">{props.data.description}</li>
            </ul>
        </div>
    )
}

export default ProductDetails;