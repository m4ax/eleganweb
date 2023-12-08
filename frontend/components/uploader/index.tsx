
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import FooterOne from '../layout/footers/FooterOne';
import SubscriptinHomeThree from '../homes/home-3/SubscriptinHomeThree';
import HeaderOne from '../layout/headers/header';
import SimpleSeamless from '../homes/home/SimpleSeamless'
import Try from './Try'
import HeroText from './herotext'
import HeroHomeTwo from '../homes/home-2/HeroHomeTwo';
import ImporterGood from '../about/ImporterGood';

const Hosting = () => {
    return (
        <>
            <HeaderOne />
            <main>
                {/* <Breadcrumb  top_title="Data Importer" title="Onboarding Solutions" /> */}
                {/* <Punchline line1="" line2="" /> */}
                <HeroHomeTwo />
                <ImporterGood />
                <HeroText />
                <Try />
                <SubscriptinHomeThree />
                <SimpleSeamless line1="First impressions count." line2="Wow your clients with migration ease." />
                {/* <PriceArea /> */}
                {/* <CoreFeatures /> */}
                {/* <TestimonailHomeOne style={true} /> */}
            </main>
            <FooterOne />
        </>
    );
};

export default Hosting;