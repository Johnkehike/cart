import { useContext } from 'react';
import { CartContext } from './Cart.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function CartReady(){
    const { cartItems } = useContext(CartContext);

    return(
        <>
                    {
                      cartItems.length > 0
                      ? (
                        <div className="notify-icon">
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                      ) : (
                        <div className="notify-icon">
                    </div>
                      )
                    }
        </>
    )
}

export default CartReady;