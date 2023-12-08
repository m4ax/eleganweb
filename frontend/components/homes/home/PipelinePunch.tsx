

interface subscription_data_type {
    id: number;
    title: string;
    sm_des: string;
    btn_text: string;
}

const subscription_data: subscription_data_type[] = [
    {
        id: 1, 
        title: "Automated Data Engineering Workflows",
        sm_des: "Implement data transformation with sophisticated, automated workflows that streamline the ingestion, cleansing, and validation processes. Our system is designed to handle complex data engineering tasks, making it easy to manage the full lifecycle of your data.",
        btn_text: "Contact Us",
    },
    {
        id: 2, 
        title: "Intelligent Data Processing and Analytics",
        sm_des: "Leverage AI-powered tools to intelligently process and analyze large datasets. Pipeline provides insights and analytics, enabling businesses to make data-driven decisions with precision and ease.",
        btn_text: "Connect",
    },
    {
        id: 3, 
        title: "Seamless Integration and Connectivity",
        sm_des: "Connect diverse data sources with our flexible integration capabilities. Pipeline allows for seamless data flow between various systems, supporting API data ingestion and providing a robust solution for both internal and external data transformation.",
        btn_text: "Billing",
    },
]
const PipelinePunch = () => {
    return (
        <>
           <section className="subscriptin-area gray-bg pt-90 pb-70 justify-content-center text-center">
              <div className="container">
                <div className="row">
                    {subscription_data.map((item, i)  => 
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="subscriptin-box mb-20 wow fadeIn" data-wow-delay="0.3s">
                                <div className="subscriptin-content">
                                <div className="flash">
                                        <i className="fa-solid fa-bolt"></i>
                                        </div>

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

export default PipelinePunch;