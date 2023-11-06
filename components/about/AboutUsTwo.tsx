interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "About Us",
    title: "Unlock Growth, Ensure Scalability.",
    title_2: "Future-Proof Your Data Ecosystem.",
    sm_des: (
        <>
            Propel your customer onboarding into the future with our advanced data migration platform. 
            Designed for growth, our tool ensures your data infrastructure scales seamlessly with your business. 
            Offer your customers an onboarding experience that's not just about the present, but also ready for their future needs. 
            With our robust automation and intelligent insights, you're not just migrating data—you're building a foundation for enduring success and customer loyalty.
        </>
    )
}


const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pt-10 pb-40">
                <div className="container text-right">
                    <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
                            <div className="about-wrapper mb-10 wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-header">
                                <h2>{title}</h2>
                                <h4>{title_2}</h4>
                                <p>{sm_des}</p>
                                <div className="btn btn-2 mt-10">Get Started Now</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsArea;