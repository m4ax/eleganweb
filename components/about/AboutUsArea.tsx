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
    sm_des: <>Elevate your customer onboarding experience to new heights. Our cutting-edge solution transforms the complex data migration journey into a streamlined, user-friendly process. 
    Empower your customers with a hassle-free setup, ensuring their first interaction is positive and productive. 
    With our intelligent automation, you can guarantee a swift, accurate, and satisfying onboarding that not only impresses but also retains. 
    Say goodbye to convoluted procedures and welcome a new era of customer satisfaction and loyalty.</>
}
const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
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