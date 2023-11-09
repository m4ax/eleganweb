import { useState } from 'react';  

const IntroVideoArea = () => {
    return (
        <>
            <div className="intro-video-area pt-115 pb-80"  style={{backgroundImage: `url(/assets/img/bg/intro-video-bg.png)`}}>
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title section-title-white  text-center mb-70">
                            <h2>Explore for yourself</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="intro-video text-center mb-30">
                            <div className="intro-video-img">
                                <img src="assets/img/bg/intro-video.jpg" alt="theme-pure" />
                                <button className="intro-video popup-video"
                                    title="video"><i
                                    className="fal fa-play"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-10">
                            <div>
                                <div className="section-title text-center mb-20 mt-100">
                                    <h2>It's Beautifully simple</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </>
    );
};

export default IntroVideoArea;