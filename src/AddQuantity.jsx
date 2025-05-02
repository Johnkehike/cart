import { useContext } from 'react';
import { CartContext } from './Cart.jsx';
import './Shop.css';
import { useState } from 'react';

function AddQuantity({}){
     const { handleQuant } = useContext(CartContext)
     const [myQuant, setMyQuant] = useState(1)

     const handleMyQuant = (e) => {
        setMyQuant(e.target.value)
        handleQuant(e)
     }

    return(

        <>
            <input type="number" value={myQuant} onChange={(e) => handleMyQuant(e) } className='quantity-btn'/>
        </>
    )
}

export default AddQuantity;