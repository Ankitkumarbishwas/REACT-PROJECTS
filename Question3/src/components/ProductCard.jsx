function ProductCard(props){
    return(
        <div className="bg-white p-5 rounded-xl border flex flex-col border-2 border-indigo-200 font-semibold">
            <h2>Name: {props.name}</h2>
            <h2>Price: {props.price}</h2>
            <h2>Category: {props.category}</h2>
        </div>
    )
}

export default ProductCard;