interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "Easy Onboarding",
    title: "Accept client data in any format.",
    title_2: "We've already done the hard work",
    sm_des: <>We'll automatically map their schema to yours, immediately fixing simple errors. </>
}

const about_content2: about_content_type = {
    sub_title: "Self Service Solution",
    title: "AI Powered Error Handling.",
    title_2: "Let clients fix data without exporting.",
    sm_des: <>Reduce onboarding tickets and streamline the migration process. </>
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
                                <div className="section-header">
                                    <h3>{sub_title}</h3>
                                    <h2>{title}</h2>
                                    <h4>{title_2}</h4>
                                    <p>{sm_des}</p>
                                    <a href="https://calendly.com/mxmry" target="_blank">
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
                            <div className="section-header">
                                <h3>{about_content2.sub_title}</h3>
                                <h2>{about_content2.title}</h2>
                                <h4>{about_content2.title_2}</h4>
                                <p>{about_content2.sm_des}</p>
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