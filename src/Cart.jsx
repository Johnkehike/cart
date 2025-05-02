import AddCart from "./AddCart";
import { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    const [total, setTodat] = useState(0);
    const [quant, setQuant] = useState(1);

    const handleQuant = (e) => {
        setQuant(Number(e.target.value))
    }

    const addToCart = (item) => {
        console.log(quant);
        
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id
                        ? {...cartItem, quantity:cartItem.quantity + quant}
                        : cartItem        
            )
            )
        }else{
            setCartItems([...cartItems, {...item, quantity: quant}]);
        }
    }

    const addToCartNew = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id
                        ? {...cartItem, quantity:cartItem.quantity += 1}
                        : cartItem        
            )
            )
        }else{
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartitem) => cartitem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)
        )
            
        }else{
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id
                        ? {...cartItem, quantity : cartItem.quantity -1}
                        : cartItem
                )
            )
        }

    }

    const deleteFromCart = (item) => {
        const isItemInCart = cartItems.find((cartitem) => cartitem.id === item.id);
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        

    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getCartTotal = () => {
        let subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        subtotal = +subtotal.toFixed(2);
        return subtotal
    }
    const getTotal = () => {
        const initial = getCartTotal()
        let all = initial + 19.99 + 2.99
        all = +all.toFixed(2);
        
        return all
    }

    const handleSubmit = () => {
        
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);

      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
            deleteFromCart,
            getTotal,
            addToCartNew,
            handleQuant,
            quant,
          }}
        >
          {children}
        </CartContext.Provider>
      );

}

// export default Cart;