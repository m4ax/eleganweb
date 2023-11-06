import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/icon/s01.png";
import service_img_2 from "../../../public/assets/img/icon/s02.png";
import service_img_3 from "../../../public/assets/img/icon/s03.png";
import service_img_4 from "../../../public/assets/img/icon/s04.png";
import service_img_5 from "../../../public/assets/img/icon/s05.png";
import service_img_6 from "../../../public/assets/img/icon/s06.png"; 
// service data 
 const services_data: services_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "Onboarding Cost",
        sm_des: "Self-service minimise data engineer involvement.",
    },
    {
        id: 2,
        img: service_img_2,
        title: "Customer Experience",
        sm_des: "AI makes it easy for your customer to come aboard.",
    },
    {
        id: 3,
        img: service_img_1,
        title: "Data Quality",
        sm_des: "Error handling automation.",
    },
    {
        id: 3,
        img: service_img_1,
        title: "Scalability",
        sm_des: "Migrate, Clean, Validate - billions of rows.",
    },
    {
        id: 2,
        img: service_img_5,
        title: "Development Time",
        sm_des: "We've already done the hardwork. Plus, no maintanence.",
    },
    {
        id: 3,
        img: service_img_1,
        title: "Upload Success Rate",
        sm_des: "We've already done the hardwork. Plus, no maintanence.",
    }
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
}
 const service_content: service_content_type = {
    title: "Seamless Data Transfer",
    sub_title: "Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 }
 const {title, sub_title} = service_content

 
const ServicesHomeOne = () => { 
    return (
        <>
            <section className="services-area pt-115 pb-95">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-30">
                                <h2>{title}</h2>
                                {/* <p>{sub_title}</p> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-50">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="services-content">
                                        <h3><Link href="/service-details">{item.title}</Link></h3>
                                        {/* <p>{item.sm_des}</p> */}
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesHomeOne;