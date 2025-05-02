
import AddQuantity from "./AddQuantity";
import AddCart from "./AddCart";
import { CartContext } from "./Cart";
import { useContext, useEffect, useState } from 'react';
import './Shop.css';
import { CiStar } from "react-icons/ci";
import PaintedStarIcon from "./PaintedStartIcon";



function Shop({products, handleFourClick}){

    const { cartItems, addToCart } = useContext(CartContext)

    const [quant, setQuant] = useState(1);

    const handleQuant = (e) => {
        console.log(e.target.value);
        
      setQuant(e.target.value)
    }

    return(
        <div className="shop">
            <div className="shop-title">
                <h1>Timeless Elegance: Fashion & Jewelry</h1>
            </div>
            <div className="product-cont">
            {
                products.map((item,index) => {
                    return(
                        <div className="each-product" key={index} >
                            <div className="top-prod">
                                <div className="img-cont">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="prod-descr">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className="bottom-prod">
                                <div className="price-prod">
                                    <div className="rating">
                                        <PaintedStarIcon />
                                        <h4>{item.rating.rate}</h4>
                                    </div>
                                    <div className="pricing">
                                        <h4>{`$ ${item.price}`}</h4>
                                    </div>
                                </div>
                                <div className="button-prod">
                                    <AddQuantity
                                    
                                    item={item} 
                                    //quant={quant}
                                    //handleQuant={handleQuant}
                                    />
                                    <AddCart 
                                    item={item}
                                    quant={quant}
                                    handleFourClick={handleFourClick}
                                    
                                    />
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
            </div>
        </div>
    )

}

export default Shop;