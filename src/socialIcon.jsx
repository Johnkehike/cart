import { FaLinkedin, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
import './Footer.css';

function SocialIcon({name}){


    return(
        <div className="social-icon">
            {name === "linkedin" ? <FaLinkedin /> : name === "github" ? <FaGithub />
            : name === "youtube"? <FaYoutube /> : <FaTwitterSquare />
            }
        </div>
    )
}

export default SocialIcon;