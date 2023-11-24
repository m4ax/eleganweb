interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "Referral Program",
    title: "Earn commission from driving affiliate sales.",
    title_2: "Make money while helping others streamline their data migration processes",
    sm_des: <></>
}

const about_content2: about_content_type = {
    sub_title: "Book a Call",
    title: "Contact us today to get started.",
    title_2: "Let's find out how we can excel together.",
    sm_des: <></>
}

const {sub_title, title, title_2, sm_des} = about_content
const HeroText = () => {
    return (
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
                                <div className="section-link text-left text-lg-right mb-30">
                                    <a href="https://calendly.com/elegan/discover" target="_blank" className="btn btn-soft-border" >Get Started Now</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HeroText;