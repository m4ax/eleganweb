import Image, { StaticImageData } from "next/image";
import feature_icon_1 from "../../../public/assets/img/icon/cf1.png";
import feature_icon_2 from "../../../public/assets/img/icon/cf2.png";
import feature_icon_3 from "../../../public/assets/img/icon/cf3.png";
import feature_icon_4 from "../../../public/assets/img/icon/cf4.png";
import feature_icon_5 from "../../../public/assets/img/icon/cf5.png"; 
import feature_icon_6 from "../../../public/assets/img/icon/cf6.png"; 
import product1 from '../../../public/assets/img/bg/product1.png'

interface core_features_data_3_type {
    id: number;
    icon: StaticImageData;
    title: string;
    features: string[];
}
const core_features_data_3:core_features_data_3_type[] = [
    {
        id: 1,
        icon: feature_icon_1,
        title: "Sync connector",
        features: [
            "All Major Providers",
            "Custom Connections",
            "Scheduled Syncing",
            "csv, json, pdf & more",
        ]
    },
    {
        id: 2,
        icon: feature_icon_2,
        title: "Data Analysis",
        features: [
            "Messy Data Accepted",
            "Automatic Schema Mapping",
            "Advanced Error Handling",
            "Logical Understanding",
        ]
    },
    {
        id: 3,
        icon: feature_icon_3,
        title: "Destination Schema",
        features: [
            "Prefilled Schema Suggestions",
            "Upload Schema",
            "Intelligient MetaData Identifier",
            "Advanced Validations",
        ]
    },
    {
        id: 4,
        icon: feature_icon_4,
        title: "AI Mapping",
        features: [
            "Intelligient Transformations",
            "Logical Validation",
            "Simplified PCI compliance",
            "Invoice support",
        ]
    },
    {
        id: 5,
        icon: feature_icon_5,
        title: "AI Suggestions",
        features: [
            "Advanced Error Handling",
            "AI Transformations",
            "Custom Functions",
            "Robust Verifiation",
        ]
    },
    {
        id: 6,
        icon: feature_icon_6,
        title: "Verification",
        features: [
            "Address, Phone, Email",
            "IP Address",
            "Social Media",
            "Identity Verification",
        ]
    },
]


interface core_features_content_type {
    title: string;
    title_2: string;
    sm_des: string;
}
const core_features_content: core_features_content_type = {
    title: "Why Choose Us",
    title_2: "With Pipeline",
    sm_des: "Automate a scheduled workflow that cleans and maps fresh data to your desired schema. Get alerted if there is an issue, and fix with zero coding knowledge."
}
const {title, title_2, sm_des} = core_features_content

const CoreFeaturesHomeThree = ({style} : any) => {
    return (
        <>
            <section className="core-features-area pt-115 pb-50">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-50">

                                <h2>{style ? title : title_2} </h2>
                                {/* <p>{sm_des}</p> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <Image src={product1} className="img-fluid mb-100" alt="AI Data Cleaning Tool Screenshot"/>
                    {/* <div className="row mx-auto">
                        {core_features_data_3.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box style_3 mb-60 wow fadeInUp p-3" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="services-content service-content-three ">
                                        <h4>{item.title}</h4>
                                        <ul>
                                            {item.features.map((feature, index ) => <li key={index}>{feature}</li>)} 
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        )}
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default CoreFeaturesHomeThree;