import Link from "next/link";
import Image from "next/image";
import core_features_data from "../../data/core-features-data";


interface features_content_type {
    title: string;
    sub_title: string;
}
const features_content:features_content_type = {
    title: "Advanced Data Management Capabilities",
    sub_title: "Pipeline offers a comprehensive suite of tools for efficient data management and transformation. With features like API data ingestion, automated csv column mapping, and no-code data pipeline functionality, it addresses the core needs of modern data migration. Pipeline supports businesses in handling large-scale data ingestion, providing seamless ETL workflows, and ensuring data integrity through automated cleansing and validation processes. Its user-friendly interface and scalable solutions make it suitable for a range of applications, from legacy system migration to cloud-based data transformation."
}
const {title, sub_title} =  features_content

const CoreFeaturesHomeTwo = () => {
    return (
        <>
            <section className="core-features-area gray-bg pt-115 pb-60">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-30 text-center mx-auto">
                                <h2 className="pb-40">{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {core_features_data.map((item, i) => 
                            <div key={i} className="col-xl-6 col-lg-6">
                                <div className="features-box mb-60 wow fadeIn" data-wow-delay={item.delay}>
                                    <div className="core-features-icon">
                                        <Image src={item.img} alt={item.title} />
                                    </div>
                                    <div className="services-content core-features-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.sm_des}</p>
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

export default CoreFeaturesHomeTwo;