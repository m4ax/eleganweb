
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import FooterOne from '../layout/footers/FooterOne';
import AboutUsArea from '../about/AboutUsArea';
import AboutUsTwo from '../about/AboutUsTwo';
import ServicesHomeOne from '../homes/home/ServicesHomeOne';
import SubscriptinHomeThree from '../homes/home-3/SubscriptinHomeThree';
import HeaderOne from '../layout/headers/header';
import Punchline from '../homes/home/Punchline';
import product1 from '../../public/assets/img/bg/product1.png'
import Image  from 'next/image';
import BenefitsPipeline from './benefitsPipeline';
import service_img_1 from '../../public/assets/img/icon/s01.png';
import service_img_3 from '../../public/assets/img/icon/s03.png';
import service_img_5 from '../../public/assets/img/icon/s05.png';
import { StaticImageData } from 'next/image';
import Showcase from  './Showcase';


const Pipeline = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb  top_title="Data Pipeline" title="Migration Solutions" />
                <Punchline line1="Streamline your Migration Process" line2=""/>
                <Showcase />                       
                <BenefitsPipeline />
                <AboutUsArea />
                <SubscriptinHomeThree />
                <AboutUsTwo />
            </main>
            <FooterOne />
        </>
    );
};

export default Pipeline;