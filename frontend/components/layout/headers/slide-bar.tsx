import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/img/logo/logo.png";
import SocialLinks from "../../common/social-links";


const SlideBar = ({sidebarOppen, setSidebarOppen}: any) => {
    return (
        <>
            <div className={`extra-info ${sidebarOppen && "info-open"}`}>
                <div className="close-icon">
                    <button aria-label="Close menu" onClick={() => setSidebarOppen(false)}>
                    <i className="far fa-window-close"></i>
                    </button>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>Hatherley Court, Cheltenham, UK    
                    </p>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Book a Call</h4>
                    <a href="https://calendly.com/elegan/discover" target="_blank">
                    <p>Appointment Slots</p>
                    </a>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>info@elegan.io</p>
                    </div>
                </div>
          </div>
        </>
    );
};

export default SlideBar;