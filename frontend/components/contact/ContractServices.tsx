import Link from "next/link";
// contact content data type
interface contact_service_data_type {
    id: number;
    icon: string;
    title: string;
    info: JSX.Element;
    action: string;
    cta: string;
}
// contact content 
const contact_service_data: contact_service_data_type[] = [
    {
        id: 1,
        icon: "fal fa-map-marker-alt",
        title: "Office Location",
        info: <>Cheltenham, United Kingdom</>, 
        action: "Find Us On Map",
        cta: "https://maps.app.goo.gl/4NBDVSkyUQybc4pR6"
    },
    {
        id: 2,
        icon: "fal fa-clock",
        title: "Office Hours",
        info: <>Mon - Fri: 09:00am to 07.00pm</>, 
        action: "Contact Us",
        cta: "https://calendly.com/elegan/discover"
    },
    {
        id: 3,
        icon: "fal fa-phone",
        title: "Phone Number",
        info: <>Book a meeting with us</>, 
        action: "Call Now",
        cta: "https://calendly.com/elegan/discover"
    },
    {
        id: 4,
        icon: "fal fa-envelope",
        title: "Email Address",
        info: <>info@elegan.io</>, 
        action: "Email Us",
        cta: "mailto:info@elegann.io"
    },
]

const ContractServices = () => {
    return (
        <>
            <section className="contract-services-area pb-90">
                <div className="container">
                    <div className="row">
                        {contact_service_data.map((item, i) =>   
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="contract-services-box text-center mb-30">
                                    <div className="mb-35">
                                     <Link href={item.cta} target="_blank"><i className={item.icon}></i></Link>
                                    </div>
                                    <div className="contract-services-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                        <span><Link href={item.cta} target="_blank">{item.action}</Link></span>
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

export default ContractServices;