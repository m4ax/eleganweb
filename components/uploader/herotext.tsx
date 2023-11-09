interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "Importer",
    title: "Streamline your onboarding process.",
    title_2: "We've already done the hard work",
    sm_des: <>Improve your customer onboarding with our solution that simplifies data migration. Provide a smooth setup process for a great first impression. 
    Our automated system ensures a quick and accurate onboarding experience, enhancing customer satisfaction and loyalty. 
    Streamline your procedures for better results.</>
}
const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pb-10">
                <div className="container text-right">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
                            <div className="about-wrapper mb-50 wow fadeIn" data-wow-delay="0.3s">
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