type MainProductProps = {
    product_id: number;
}

function MainProduct({product_id}: MainProductProps) {

    function onClick(e: React.MouseEvent) {
        e.preventDefault();
        console.log("added to cart", product_id);
    }

    //FETCH from
    
    return (
        <div>
            <img src="https://placehold.co/500x500/png"/>
            <h2 className="productName">Ultra Socks</h2>
            <p className="productPrice">$0.99</p>
            <p className="productSize">L</p>
            <p className="productColor">Black, Green</p>
            <button onClick={(e) => onClick(e)}>ADD TO CART</button>
        </div>
    )
}

export default MainProduct