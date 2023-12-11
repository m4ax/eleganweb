interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "Easy Onboarding",
    title: "Accept client data in any format.",
    title_2: "We've already done the hard work.",
    sm_des: <>Say goodbye to the complexities of manual data formatting. Uploader automatically aligns client data with your schema, performing essential data mapping and cleansing. This feature significantly reduces the time and effort typically spent on data preparation, ensuring a smooth, error-free data integration process.</>
}

const about_content2: about_content_type = {
    sub_title: "Effortless Client Onboarding",
    title: "Reduce Support Tickets",
    title_2: "Let clients fix data without exporting.",
    sm_des: <>Uploader is engineered to minimize back-and-forth support queries. Its intuitive interface and automated processes mean clients can easily onboard their data without encountering common hurdles, drastically reducing the number of support tickets your team handles and freeing up resources for other critical tasks.</>
}

const {sub_title, title, title_2, sm_des} = about_content
const HeroText = () => {
    return (
        <>
                <div className="about-us-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="about-wrapper wow fadeIn" data-wow-delay="0.3s">
                                <div className="section-title">
                                    <h3 className="mb-30">{sub_title}</h3>
                                    <h2 >{title}</h2>
                                    <h4 className="mt-30">{title_2}</h4>
                                    <p className="para-size">{sm_des}</p>
                                    <a href="https://calendly.com/elegan/discover" target="_blank">
                                    <div className="btn btn-2 mt-10" >Get Started Now</div>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-area pb-10">
                <div className="container text-right">
                    <div className="row">
                        <div className="col-sm">
                            <div className="about-wrapper mb-50 wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-title">
                                <h3 className="mb-30">{about_content2.sub_title}</h3>
                                <h2>{about_content2.title}</h2>
                                <h4 className="mt-30">{about_content2.title_2}</h4>
                                <p className="para-size">{about_content2.sm_des}</p>
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

export default HeroText;