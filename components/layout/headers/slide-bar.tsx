import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/img/logo/logo.png";
import SocialLinks from "../../common/social-links";


const SlideBar = ({sidebarOppen, setSidebarOppen}: any) => {
    return (
        <>
            <div className={`extra-info ${sidebarOppen && "info-open"}`}>
                <div className="close-icon">
                    <button onClick={() => setSidebarOppen(false)}>
                    <i className="far fa-window-close"></i>
                    </button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/">
                        <Image src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>Hatherley Court, Cheltenham, UK    
                    </p>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Book a Call</h4>
                    <a href="https://calendly.com/mxmry" target="_blank">
                    <p>Appointment Slots</p>
                    </a>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>info@elegan.io</p>
                    </div>
                </div>
                <div className="instagram">
                    <a href="#">
                    <img src="assets/img/blog/ins1.jpg" alt="elegan-data-migration" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins4.jpg" alt="elegan-data-migration" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins3.jpg" alt="elegan-data-migration" />
                    </a>
                </div>
                <div className="social-icon-right mt-20">
                    <SocialLinks /> 
                </div>
          </div>
        </>
    );
};

export default SlideBar;