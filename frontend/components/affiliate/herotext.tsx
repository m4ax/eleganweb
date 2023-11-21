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