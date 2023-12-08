interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "Data Importer",
    title: "Simplifying Data Onboarding for SaaS",
    title_2: "Empowering Clients with Automated Data Integration",
    sm_des: <>Our Importer is redefining client data onboarding for SaaS providers, blending AI and ML technologies to streamline the data integration process. This innovative tool offers a user-friendly, drag-and-drop interface, enabling effortless data uploads. It goes beyond mere data input; with AI-driven mapping and automated cleansing, Uploader ensures that uploaded data seamlessly conforms to required formats and schemas, enhancing operational efficiency and data accuracy. This automation significantly reduces the onboarding time and minimizes the need for manual data handling.</>
}
const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pt-120 pb-90" style={{backgroundImage: `url(/assets/img/bg/share-core-bg.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about-wrapper mb-30 wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-header">
                                <span>{sub_title}</span>
                                <h2>{title}</h2>
                                <h4>{title_2}</h4>
                                <p>{sm_des}</p>
                                <a href="https://calendly.com/elegan/discover" target="_blank">
                                <div className="btn btn-2 mt-10">Get Started Now</div>
                                </a>
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