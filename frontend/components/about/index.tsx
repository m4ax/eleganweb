
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import AboutUsArea from './AboutUsArea';
import CoreFeaturesHomeThree from '../homes/home-3/CoreFeaturesHomeThree';
import OurTeam from './OurTeam';
import OurFaqArea from './OurFaqArea';
import FooterOne from '../layout/footers/FooterOne';
import HeaderOne from '../layout/headers/header';
import ImporterGood from '../about/ImporterGood';

const About = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="About Us"  title='About' />

                <AboutUsArea />
                <CoreFeaturesHomeThree style={true} />
                <OurTeam />
                <OurFaqArea />
            </main>
            <FooterOne />
        </>
    );
};

export default About;