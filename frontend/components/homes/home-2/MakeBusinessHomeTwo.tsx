
import Image from "next/image";
import business_img from "../../../public/assets/img/bg/business.png";
import Link from "next/link";

interface make_business_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
    sm_des: string;
    fetures: string[];
}

const make_business_content:make_business_content_type = {
    bg_img: "/assets/img/bg/makebg.jpg",
    sub_title: "Data Importer Solution",
    title: "Facing Challenges with Client Data Onboarding in Your SaaS Platform?",
    sm_des: "We're here to help. Get in touch and we'll get back to you as soon as we can.",
    fetures: [
        "Inconsistent Data Formats and Quality?",
        "Back-and-Forth Client Support Queries?",
        "Facing Long Lead Times in Client Onboarding?",
    ],  

}
const {bg_img, sub_title, title, sm_des, fetures} = make_business_content

const MakeBusinessHomeTwo = () => {
    return (
        <>
           <section className="make-business-area pt-115 pb-90 fix" style={{backgroundImage: `url(${bg_img})`}}>
                <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title make-business-titles section-title-white mb-70">
                                    <span>{sub_title}</span>
                                    <h3>{title}</h3>
                                    <h4>{sm_des}</h4>
                                </div>
                            </div>
                            <div className="make-business">
                                 <ul>
                                    {fetures.map((item, i) => 
                                     <li key={i}><span>{item}</span></li>                                    
                                    )} 
                                 </ul>
                            </div>
                            <div className="make-btn">
                                <Link href="/uploader" className="btn btn-soft-border">Get Started Now</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="faq-img make-business-img mb-30">
                                <Image className="bounce-animate" src={business_img} alt="business-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default MakeBusinessHomeTwo;