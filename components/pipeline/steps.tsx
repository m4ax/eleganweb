import React from 'react';
import { about_content_type } from '.';

interface Props {
    data: about_content_type;
}




const AboutUsArea: React.FC<Props> = (props) => {
    const {sub_title, title, title_2, sm_des, position} = props.data

    if (position == "left") {


        return (
            <>
                <div className="about-us-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8">
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
            </>
        );
    } else {

    return (
        <>
            <div className="about-us-area">
                <div className="container">
                    <div className="row text-right">
                        <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
                            <div className="about-wrapper wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-header">
                                <h3>{sub_title}</h3>
                                <h2>{title}</h2>
                                <h4>{title_2}</h4>
                                <p>{sm_des}</p>
                                <a href="https://calendly.com/mxmry" target="_blank">
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
}

export default AboutUsArea;
