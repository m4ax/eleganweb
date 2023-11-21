

interface subscription_data_type {
    id: number;
    title: string;
    sm_des: string;
    btn_text: string;
}

const subscription_data: subscription_data_type[] = [
    {
        id: 1, 
        title: "Make Onboarding Easy",
        sm_des: "First impressions count. Utilise our importer to make it easy for your customers to come aboard, no matter the structure of their legacy data.",
        btn_text: "Contact Us",
    },
    {
        id: 2, 
        title: "Automate Transformations",
        sm_des: "We have seen failure rates halved. Instead of customers needing to manual manipulate their data elsewhere, let them do it directly in the upload process.",
        btn_text: "Connect",
    },
    {
        id: 3, 
        title: "Reduce Onboarding Costs",
        sm_des: "Slow migration costs you money. Our importer reduces the time and effort required to onboard customers, saving you money and increasing your margins",
        btn_text: "Billing",
    },
]
const SubscriptinHomeThree = () => {
    return (
        <>
           <section className="subscriptin-area gray-bg pt-120 pb-90 justify-content-center text-center">
              <div className="container">
                <div className="row">
                    {subscription_data.map((item, i)  => 
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="subscriptin-box mb-30 wow fadeIn" data-wow-delay="0.3s">
                                <div className="subscriptin-content">
                                    <h4>{item.title}</h4>
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