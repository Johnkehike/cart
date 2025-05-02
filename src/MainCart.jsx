import { useContext } from 'react';
import { CartContext } from './Cart.jsx';
import './MainCart.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Cart({handleFourClick}){
    const { cartItems, addToCart, addToCartNew, removeFromCart, deleteFromCart, getTotal, clearCart, getCartTotal } = useContext(CartContext)
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        if (cartItems.length > 0) {
            setShowThankYou(true);


            const timer = setTimeout(() => {
                setShowThankYou(false);
            }, 5000);
            clearCart();

        } else {
            console.log("Cart is empty, cannot checkout.");
        }
    };

    useEffect(() => {
        return () => {
        };
    }, []); 



    // return(
    //     <div className="cart-main">
    //         <div className="cart-side">
    //             <div className="cart-title">
    //                 <h3>Cart</h3>
    //             </div>
    //             {
    //                 cartItems.length >0 ?
    //                 (
                
    //             <div className="cart-cont">
    //             {
                    
    //                 cartItems.map((item, index) => {
                        
                        
    //                     return(

                        
    //                     <div className="each-cart" key={index}>
    //                         <div className="photo-cont">
    //                             <img src={item.image} alt="" />
    //                         </div>
    //                         <div className="title-cart-each">
    //                             <div className="title-n-price">
    //                                 <p>{item.title}</p>
    //                                 <p>{item.price}</p>
    //                             </div>
    //                             <div className="buttons-cart-each">
    //                                 <div className="plus-minus">
    //                                     <button onClick={() => removeFromCart(item)}>-</button>
    //                                     <p>{
    //                                         item.quantity === null
    //                                             ? 0
    //                                             : item.quantity < 0
    //                                             ? 0
    //                                             : item.quantity
    //                                         }</p>
    //                                     <button onClick={() => addToCart(item)}>+</button>
    //                                 </div>
    //                                 <div className="remove-button">
    //                                     <button onClick={() => deleteFromCart(item)}>Remove</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     )
    //                 })
                    
                        
                            
                        
                    
    //             }
    //             </div>) : (
    //                 <p>Your cart is empty, <Link to="/shop">Shop Now!</Link></p>
    //             )

    //         }
    //         </div>
    //         <div className="bill-side">
    //             <div className="bill-title">
    //                 <h3>Bill</h3>
    //             </div>
    //             <div className="bills">
    //                 <div className="bill-price">
    //                     <div className="sub-total">
    //                         <p>Subtotal</p>
    //                         <p>{`$ ${getCartTotal()}`}</p>
    //                     </div>
    //                     <div className="shpping">
    //                         <p>Shipping</p>
    //                         <p>$ 19.99</p>
    //                     </div>
    //                     <div className="shpping">
    //                         <p>Platform</p>
    //                         <p>$ 2.99</p>
    //                     </div>
    //                     <div className="shpping">
    //                         <p>Discount</p>
    //                         <p>0%</p>
    //                     </div>
    //                     <div className="shpping">
    //                         <h4>Total</h4>
    //                         <h4>{`$ ${getTotal()}`}</h4>
    //                     </div>

    //                 </div>
    //                 <div className="coupon">
    //                     <div className="coupon-title">
    //                         <p>Discount Coupon</p>
    //                     </div>
    //                     <div className="input">
    //                         <input type="text" placeholder='Enter coupon code' />
    //                         <button>Apply</button>
    //                     </div>
    //                 </div>
    //                 <div className="payment-method">
    //                     <div className="payment-title">
    //                         <p>Payment methods</p>
    //                     </div>
    //                     <div className="payment-accepted">
    //                         <p>All major credit cards accepted</p>
    //                     </div>
    //                     <div className="payment-checkout">
    //                         <button onClick={() => handleSubmit}>checkout</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <div className="cart-page-container"> 
            {showThankYou ? (
                <div className="thank-you-message" >
                    <h2>Thanks for Shopping with us!</h2>
                </div>
            ) : (
              
                <div className="cart-main">
                    <div className="cart-side">
                        <div className="cart-title">
                            <h3>Cart</h3>
                        </div>
                        {
                            cartItems.length >0 ?
                            (
                                <div className="cart-cont">
                                {
                                    cartItems.map((item, index) => {
                                        return(
                                            <div className="each-cart" key={index}>
                                                <div className="photo-cont">
                                                    <img src={item.image} alt={item.title || 'Cart item image'} /> 
                                                </div>
                                                <div className="title-cart-each">
                                                    <div className="title-n-price">
                                                        <p>{item.title}</p>
                                                        <p>{item.price}</p> 
                                                    </div>
                                                    <div className="buttons-cart-each">
                                                        <div className="plus-minus">
                                                            <button onClick={() => removeFromCart(item)}>-</button>
                                                            <p>{
                                                                item.quantity === null
                                                                    ? 0
                                                                    : item.quantity < 0
                                                                    ? 0
                                                                    : item.quantity
                                                                }</p>
                                                            <button onClick={() => addToCartNew(item)}>+</button>
                                                        </div>
                                                        <div className="remove-button">
                                                            <button onClick={() => deleteFromCart(item)}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            ) : (
                                <p>Your cart is empty, <Link to="/shop" onClick={() => handleFourClick(2)}>Shop Now!</Link></p>
                            )
                        }
                    </div>
                    <div className="bill-side">
                        <div className="bill-title">
                            <h3>Bill</h3>
                        </div>
                        <div className="bills">
                            <div className="bill-price">
                                <div className="sub-total">
                                    <p>Subtotal</p>
                                    <p>{`$ ${getCartTotal()}`}</p>
                                </div>
                                <div className="shpping"> 
                                    <p>Shipping</p>
                                    <p>$ 19.99</p>
                                </div>
                                <div className="shpping"> 
                                    <p>Platform</p>
                                    <p>$ 2.99</p>
                                </div>
                                <div className="shpping"> 
                                    <p>Discount</p>
                                    <p>0%</p> 
                                </div>
                                <div className="shpping">
                                    <h4>Total</h4>
                                    <h4>{`$ ${getTotal()}`}</h4>
                                </div>
                            </div>
                            <div className="coupon">
                                <div className="coupon-title">
                                    <p>Discount Coupon</p>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder='Enter coupon code' />
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="payment-method">
                                <div className="payment-title">
                                    <p>Payment methods</p>
                                </div>
                                <div className="payment-accepted">
                                    <p>All major credit cards accepted</p>
                                </div>
                                <div className="payment-checkout">
                                    <button onClick={handleSubmit}>checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Cart;