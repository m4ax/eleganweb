import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../types/service-types";

import service_img_1 from "../../public/assets/img/icon/s01.png";
import service_img_2 from "../../public/assets/img/icon/s02.png";
import service_img_3 from "../../public/assets/img/icon/s03.png";
import service_img_4 from "../../public/assets/img/icon/s04.png";
import service_img_5 from "../../public/assets/img/icon/s05.png";


interface step_data_type {
    id: number;
    title: string;
    sm_des: string;
    sub_title: string;

}

interface title_type {
    title: string;
    sub_title: string;

}


 const services_data: step_data_type[] = [
    {
        id: 1,
        sub_title: "Step 1",
        title: "Connect",
        sm_des: "Pipeline revolutionizes database connectivity. With just a few clicks, users can effortlessly link their input and output databases. Our platform’s intuitive design ensures a hassle-free setup, enabling smooth data flows between systems. This seamless integration is key for businesses looking to synchronize their data across multiple platforms, making complex data transformation tasks manageable and user-friendly.",
        
    },
    {
        id: 2,
        sub_title: "Step 2",
        title: "Pre-Analysis",
        sm_des: "Pre-analysis stage is where the magic happens for messy, semi-structured data. Utilising cutting-edge algorithms, we conduct a thorough analysis to construct and organise billions of rows of unstructured data into traditional format. This process is crucial for businesses inundated with vast volumes of data that defy typical structuring methods."
    },
    {
        id: 2,
        sub_title: "Step 3",
        title: "Auto Clean, Map & Fix",
        sm_des: "We can effortlessly identify and rectifies inconsistencies, remove duplicates, and correct errors. This automated refinement is particularly adept at processing extensive datasets that traditionally require significant manual oversight. The result is a pristine, uniform dataset, optimized for your specific needs and ready for advanced analysis or integration into your existing systems.",    
    },
    {
        id: 3,
        sub_title: "Step 4",
        title: "AI Suggestions.",
        sm_des: "Utilise AI with our intelligent suggestions feature. When dealing with ambiguous or incomplete data, our AI algorithms provide smart, context-aware suggestions. These insights are invaluable in decision-making processes, offering users guidance on how to best handle their data. This AI-driven approach not only accelerates data processing but also ensures that the data you work with is as informative and accurate as possible.",
    },    
    {
        id: 3,
        sub_title: "Step 5",
        title: "Verification.",
        sm_des: "For added precision, we offer an add-on service for personal data verification, including email, phone numbers, identification documents, banking details, UUIDs, IP addresses and more. This service is essential for maintaining data quality and adherence to regulatory compliance, providing businesses with the assurance that their data upholds the strictest verification criteria",
        
    },
    {
        id: 2,
        sub_title: "Step 6",
    title: "Export & Schedule.",
    sm_des: "Optimize your workflows with Pipeline's data export scheduler. Automate your exports to sync with your business's operational timeline, eliminating manual processes. This tool ensures that your data is processed and ready for use on schedule, supporting continuous data analysis, reporting, and system updates. It's an essential feature for any business looking to maintain a steady stream of current and actionable data.",
   
    },
 ]

 const service_content: title_type = {
    title: "Seamless Data Transfer",
    sub_title: "Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 }
 const {title, sub_title} = service_content

 
const StepsPipeline = () => { 
    return (
        <>
            <section className="services-area pt-20 pb-25">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-12">
                            <div className="section-title text-center mb-30">
                                <h2>{title}</h2>
                                {/* <p>{sub_title}</p> */}
                            </div>
                        </div>
                        
                        {/* <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Learn More</a>
                            </div>
                        </div> */}
                    </div>

                    <div className="row pt-50">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-content">
                                        <h6>{item.sub_title}</h6>
                                        <h3>{item.title}</h3>
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

export default StepsPipeline;