import Link from 'next/link';
import SocialLinks from '../../common/social-links';
import Image from 'next/image';
import footer_logo from "../../../public/assets/img/logo/logo.png";

interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}
// footer links data 
const footer_links: footer_links_type[] = [
    {
        id: 1,
        title: "Our Products",
        links: [
           { title: "Onboarding", link: "#"},
           { title: "Migration", link: "#"},
           { title: "Cleansing", link: "#"},
           { title: "Verification", link: "#"},
           { title: "Logical Validation", link: "#"}
        ]
    },
    {
        id: 2,
        title: "Get Links",
        links: [
           { title: "Privacy", link: "/about"},
           { title: "Your Data", link: "/hosting"},
           { title: "Support", link: "/blog"},
           { title: "Book a Demo", link: "#"},
        ]
    },
    {
        id: 3,
        title: "Our Company",
        links: [
           { title: "About", link: "/about"},
           { title: "News", link: "/blog-details"},
           { title: "Contact Us", link: "/contact"},
        ]
    }
]
// footer content type
interface footer_content_type {
    sub_title: string;
    title: string;
    price_title: string;
    price: string;
    info_us: string;
    address: string;
    mail: string;
    phone: string;
    website: string;
    footer_info: string;
}
// footer content here
const footer_content: footer_content_type ={
    sub_title: "Get an easy quote",
    title: "Book a Quick Call with an Expert.",
    price_title: "Starting At Only",
    price: "0.00003",
    info_us: "Streamline data migration by automating cleaning, transformation, and verification processes. .",
    address: "Hatherley Court, Cheltenham, GL51 3AQ",
    mail :"contact@elegandata.com",
    phone: "+44 7424 530231",
    website: "www.elegandata.com",
    footer_info: "Earn commission by referring followers or members of your network. Make money while helping others streamline their data migration processes.",    

}

const {sub_title, title, price_title, price, info_us, address, mail, phone, website, footer_info } = footer_content

const FooterOne = () => {
    return (
        <>
            <footer>
                <section className="footer-area pt-110 pb-90 bg-footer" style={{backgroundImage: `url(/assets/img/bg/footer-bg.jpg)`}}>
                    <div className="container">
                        <div className="row d-flex justify-content-start justify-content-md-between align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="footer-sing-up mb-30">
                                    <h5>{sub_title}</h5>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-5 col-lg-3">
                                <div className="footer-left-info mb-30">
                                    <h5>{price_title}</h5>
                                    <h2>${price}<span>/record*</span></h2>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-7 col-lg-3">
                                <div className="footer-btn mb-30">
                                    <Link href="#" className="btn btn-grad">Get Started Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-border"></div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-4 col-lg-4 mb-30">
                                <div className="footer-bottom-area">
                                    <div className="widgets">
                                        <div className="footer-logo">
                                            <Image src={footer_logo} alt="theme-pure" />
                                        </div>
                                        <p>{info_us}</p>
                                        <ul className="adress">
                                            <li><i className="fa fa-map-marker-alt"></i> <span>{address}</span></li>
                                            <li><i className="fa fa-envelope"></i> <span>{mail}</span></li>
                                            <li><i className="fa fa-phone"></i> <span>{phone}</span></li>
                                            <li><i className="fa fa-globe"> </i> <span>{website}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-social text-center">
                                    <SocialLinks />  
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="footer-right-box pl-70">
                                    <div className="row">
                                        {footer_links.map((item, i) => 
                                            <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                                <div className="wigets mb-30">
                                                    <div className="widgets-titles">
                                                        <h4>{item.title}</h4>
                                                    </div>
                                                    <div className="wegets-body">
                                                        <ul>
                                                            {item.links.map((link , index ) => <li key={index}>
                                                                <Link href={link.link}>{link.title}</Link></li> 
                                                            )} 
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="footer-text">
                                            <p>{footer_info}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="footer-orange-btn text-left text-xl-right">
                                            <Link href="#" className="btn"><i className="fa fa-users"></i> Referral Scheme</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </footer>
        </>
    );
};

export default FooterOne;