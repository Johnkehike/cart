import { Link } from "react-router-dom";
import './DefaultProfile.css';




function DefaultProfile({homeImg, handleFourClick}){

    return(
        <div className="home-main">
            <div className="descr">
                <h2>Discover the perfect blend of elegance, comfort and trendith our exclusive fashionllections.</h2>
                <Link to={'./shop'} onClick={() => handleFourClick(2)}><button>Shop Now</button></Link>
            </div>
            <div className="home-img">
                <img src={homeImg} alt="" />
            </div>
        </div>
    )
}

export default DefaultProfile;