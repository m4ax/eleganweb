
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
import Steps from './steps';

export interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: string;
    position?: string;
}

// const about_content: about_content_type = {
//     sub_title: "Importer",
//     title: "Streamline your onboarding process.",
//     title_2: "We've already done the hard work",
//     sm_des: <>Improve your customer onboarding with our solution that simplifies data migration. Provide a smooth setup process for a great first impression. 
//     Our automated system ensures a quick and accurate onboarding experience, enhancing customer satisfaction and loyalty. 
//     Streamline your procedures for better results.</>
// }

const step1:about_content_type = {
    sub_title: "Step 1",
    title: "Connect your data source.",
    sm_des: "No need to worry about format, struture or size. We can handle it. This will be a seamless process. You can also sync an import with a schedule. ",
    title_2: "We accept all major importers.",
    position: "left"
    }

const step2:about_content_type = {
    sub_title: "Step 2",
    title: "We'll do the heavy lifting.",
    sm_des: "Elegan AI will automatically fix, map and transform your data. This will be based on your destination schema, the data being processed and historical data. ",
    title_2: "AI intelligiently transforms your data.",
    position: "right"
    }

const step3:about_content_type = {
    sub_title: "Step 3",
    title: "AI Suggestions.",
    sm_des: "It is impossible to get everything right. However, for the last mile of data transformation, we'll suggest various manipulations, sorted based on their probability. You just accept or decline. No coding knowledge required.",
    title_2: "For ambiguous data - we'll recommend suggestions for your approval.",
    position: "left"
    }

const step4:about_content_type = {
    sub_title: "Step 4",
    title: "Verification.",
    sm_des: "We'll estimate the ratio of accurate to inacurrate data, and suggest whether you should do deep verification. This consists of ensuring things like email, phone and addresses are accurate and not fake. This service is optional.",
    title_2: "It's good to know your data is quality.",
    position: "right"
    }

const step5:about_content_type = {
    sub_title: "Step 5",
    title: "Export & Schedule.",
    sm_des: "Your data has been transformed, validated and migrated. With no code. You can opt to schedule this migration for consistent data flows, or if you want to incorparte ourservices into your pipeline.",
    title_2: "Sync outbound data to your preferred connection.",
    position: "left"
    }


const Pipeline = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb  top_title="Data Pipeline" title="Migration Solutions" />
                <Punchline line1="Simplified Migration Solutions" line2=""/>
                <Showcase />        
                <Punchline line1="We make it easy" line2="To migrate large volumes of data"/>               
                <Steps data={step1} />
                <Steps data={step2} />  
                <Steps data={step3} />
                <Steps data={step4} />
                <Steps data={step5} />
                <BenefitsPipeline />
                <Punchline line1="Like what you see?" line2="Let's have a chat." />
            </main>
            <FooterOne />
        </>
    );
};

export default Pipeline;