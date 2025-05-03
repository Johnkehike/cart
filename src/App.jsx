import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
//<FontAwesomeIcon icon={faLinkedin} />
import { Link } from "react-router-dom";
import DefaultProfile from './DefaultProfile';
import Footer from './Footer';
import homeImg from "./assets/home.png";
import Shop from './Shop';
import {CartProvider} from './Cart.jsx';
import Cart from './MainCart.jsx';
import AboutUs from './About';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import CartReady from './cartReady';
import { FaHome, FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosMenu, IoMdClose } from "react-icons/io";


function App() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(1);
  const [openNav, setOpenNav] = useState(false);
  

  //'https://fakestoreapi.com/products'

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {mode: "cors"})
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  },[])

  const handleFourClick = (value) => {
    setSelected(value);
  }


  return (
    <CartProvider>
      <div className="main">
        <nav>
          <div className={openNav ? 'no-logo' : 'logo'}>
            <h1>LuxeCart</h1>
            <FontAwesomeIcon icon={faCircle} /> 
          </div>
          <div className={openNav ? 'no-menu' : 'menu'} onClick={() => setOpenNav(true)}>
            <IoIosMenu />
          </div>
          <div className={openNav ? 'nav-items-mobile' : 'no-nav-items-mobile'}>
              <div className={selected === 1 ? `home-new` : `home`}>
                
                <Link onClick={() => setSelected(1)} to="/"><FaHome /> Home</Link>
              </div>
              <div className={selected === 2 ? `shop-btn-new` : `shop-btn`}>
                
                <Link onClick={() => setSelected(2)} to="/shop" ><HiShoppingBag /> Shop</Link>
              </div>
              <div className={selected === 3 ? `about-new` : `about`}>
                
                <Link onClick={() => setSelected(3)} to="/aboutus"><FaUser /> About</Link>
              </div>

              {/* <div className={openNav ? 'cart-bag' : 'no-cart-bag'}> */}
                
                  {
                    openNav ? 
                      (<Link className={selected === 4 ? `cart-new` : `cart`} onClick={() => setSelected(4)} to="/cart" >
                        <CartReady />
                        <div className={selected === 4 ? `basket-new` : `basket`}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </Link>) : 
                    (
                      <Link className="carrt">
                      
                      <div className="baskett">
                      
                      </div>
                  </Link>
                    )

                  }
                    
                  
              


              <div className="close-btn" onClick={() => setOpenNav(false)}>
                <IoMdClose />
              </div>
              
          </div>
          <div className="nav-buttons">
            <div className={selected === 1 ? `home-new` : `home`}>
              
              <Link onClick={() => setSelected(1)} to="/"><FaHome /> Home</Link>
            </div>
            <div className={selected === 2 ? `shop-btn-new` : `shop-btn`}>
              
              <Link onClick={() => setSelected(2)} to="/shop" ><HiShoppingBag /> Shop</Link>
            </div>
            <div className={selected === 3 ? `about-new` : `about`}>
              
              <Link onClick={() => setSelected(3)} to="/aboutus"><FaUser /> About</Link>
            </div>
          </div>
          <Link className={selected === 4 ? `cart-new` : `cart`} onClick={() => setSelected(4)} to="/cart" >
            <CartReady />
            <div className={selected === 4 ? `basket-new` : `basket`}>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </Link>
        </nav>
                {name === "shop" ? (
                <Shop 
                handleFourClick={handleFourClick}
                products={products}
                />
              ) : name === "aboutus" ? (
                <AboutUs />
              ) : name === "cart" ? (
                <Cart 
                handleFourClick={handleFourClick}
                />
              )
              : (
                <DefaultProfile
                homeImg={homeImg}
                handleFourClick={handleFourClick}
                />
              )}

        <Footer 
        faLinkedin={faCartShopping}
        faSquareXTwitter={faCartShopping}
        faSquareGithub={faCartShopping}
        
        />

      </div>
      </CartProvider>
    
  )
}

export default App
