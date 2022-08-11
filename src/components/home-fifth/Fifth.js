import "./Fifth.scss"
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";




const Fifth = () => {



  return (
    <div className="footer-container">
        <h3>Connect with us on social media</h3>
        <div className='social-icons'>
            <a className='social' href="https://www.facebook.com"><FaFacebook/></a>
            <a className='social' href="https://www.youtube.com"><FaYoutube/></a>
            <a className='social' href="https://www.instagram.com"><FaInstagram/></a>
            <a className='social' href="https://www.twitter.com"><FaTwitter/></a>
        </div>
    </div>
  )
}

export default Fifth