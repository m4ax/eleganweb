

interface subscription_data_type {
    id: number;
    title: string;
    sm_des: string;
    btn_text: string;
}

const subscription_data: subscription_data_type[] = [
    {
        id: 1, 
        title: "Reduce Onboarding Tickets",
        sm_des: "Utilize our state-of-the-art data ingestion tools to facilitate effortless client data integration. Onboarder's advanced API data ingestion capabilities allow for easy and secure data transfer, significantly reducing the time and complexity typically associated with onboarding new clients.",
        btn_text: "Contact Us",
    },
    {
        id: 2, 
        title: "Automate Processing and Validation",
        sm_des: "Experience the convenience of automated data mapping and cleansing with our no-code solution. Onboarder intelligently identifies schema and automatically aligns client data with your system's format, ensuring high data quality and integrity from the outset.",
        btn_text: "Connect",
    },
    {
        id: 3, 
        title: "Accelerate Client Setup",
        sm_des: "Maximize your operational efficiency with Onboarder's streamlined data transformation services. Our cloud-based data migration system not only enhances data quality but also minimizes the need for manual data wrangling, allowing your team to focus on core business activities.",
        btn_text: "Billing",
    },
]
const SubscriptinHomeThree = () => {
    return (
        <>
           <section className="subscriptin-area pt-50 pb-90 justify-content-center text-center">
              <div className="container">
                <div className="row">
                    {subscription_data.map((item, i)  => 
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="subscriptin-box mb-30 wow fadeIn" data-wow-delay="0.3s">
                                <div className="subscriptin-content">
                                    <h2 className="pb-20">{item.title}</h2>
                                    <p>{item.sm_des}</p>
                                    <div className="subscriptin-btn">
                                        {/* <a href="#" className="btn btn-three">
                                            <i className="fal fa-money-bill"></i>{item.btn_text}
                                        </a> */}
                                    </div>
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

export default SubscriptinHomeThree;