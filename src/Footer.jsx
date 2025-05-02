import FooterButton from "./FooterButton";
import SocialIcon from "./socialIcon";
import './Footer.css';


function Footer({ faCartShopping }){
    return(
        <div className="footer">
            <div className="company">
                <div className="title">
                    <h4>Our Company</h4>
                </div>
                <FooterButton 
                name="About Us"
                />
                <FooterButton 
                name="Our Services"
                />
                <FooterButton 
                name="Private Policy"
                />
                <FooterButton 
                name="Affiliate Programme"
                />
            </div>

            <div className="company">
                <div className="title">
                    <h4>Online Shop</h4>
                </div>
                <FooterButton 
                name="Watch"
                />
                <FooterButton 
                name="Bags"
                />
                <FooterButton 
                name="Shoes"
                />
                <FooterButton 
                name="Dress"
                />
            </div>

            <div className="company">
                <div className="title">
                    <h4>Get Help</h4>
                </div>
                <FooterButton 
                name="FAQ"
                />
                <FooterButton 
                name="Order Status"
                />
                <FooterButton 
                name="Returns"
                />
                <FooterButton 
                name="Payment Options"
                />
            </div>

            <div className="follow">
                <div className="title">
                    <h4>Foolow Us</h4>
                </div>
                <div className="title-icon">
                    <SocialIcon 
                    name="linkedin"
                    />
                    <SocialIcon 
                    name="github"
                    />
                    <SocialIcon 
                    name="youtube"
                    />
                    <SocialIcon 
                    name="twitter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;