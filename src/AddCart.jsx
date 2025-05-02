import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import CartProvider from "./Cart";
import { CartContext } from "./Cart";
import { useContext, useEffect } from 'react';
import './Shop.css';


function AddCart({item, handleFourClick}){
    const [cart, setCart] = useState(false);
    const { cartItems, addToCart, quant, handleQuant } = useContext(CartContext)
    
    

    const handleAdd = (item) => {
        setCart(true);
        addToCart(item);

    }
    return(
        <>
            {
                cart ? (
                    <Link to="/cart" className="cart-btn" onClick={() => handleFourClick(4)}>Go to Cart</Link>
                ) : (
                    <Link onClick={() => handleAdd(item)} className="cart-btn">Add to Cart</Link>
                )
            }
        </>
    )
}

export default AddCart;