
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import FooterOne from '../layout/footers/FooterOne';
import HeaderOne from '../layout/headers/header';
import Punchline from '../homes/home/Punchline';
import BenefitsPipeline from './benefitsPipeline';
import Showcase from  './Showcase';
import Steps from './steps';
import HeroHomeThree from '../../components/homes/home-3/HeroHomeThree';
import PipelineHero from '../../components/homes/home/PipelineHero';
import PipelineTitle from './PipelineTitle';
import StepsPipeline from './StepsPipeline';
import CoreFeaturesHomeTwo from '../homes/home-2/CoreFeaturesHomeTwo';

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
    title: "Connect",
    sm_des: "Pipeline revolutionizes database connectivity. With just a few clicks, users can effortlessly link their input and output databases. Our platform’s intuitive design ensures a hassle-free setup, enabling smooth data flows between systems. This seamless integration is key for businesses looking to synchronize their data across multiple platforms, making complex data transformation tasks manageable and user-friendly.",
    title_2: "Direct Database Integration",
    position: "left"
    }

const step2:about_content_type = {
    sub_title: "Step 2",
    title: "Auto Clean, Map & Fix",
    sm_des: "By eliminating the need for manual data cleansing and mapping, Pipeline significantly enhances data accuracy and efficiency. This automation is particularly proficient in handling large datasets, where manual processing is time-consuming and prone to errors.",
    title_2: "Automated Data Processing.",
    position: "right"
    }

const step3:about_content_type = {
    sub_title: "Step 3",
    title: "AI Suggestions.",
    sm_des: "Utilise AI with our intelligent suggestions feature. When dealing with ambiguous or incomplete data, our AI algorithms provide smart, context-aware suggestions. These insights are invaluable in decision-making processes, offering users guidance on how to best handle their data. This AI-driven approach not only accelerates data processing but also ensures that the data you work with is as informative and accurate as possible.",
    title_2: "Intelligent Data Insights",
    position: "left"
    }

const step4:about_content_type = {
    sub_title: "Step 4",
    title: "Verification.",
    sm_des: "Pipeline ensures the utmost data integrity with its comprehensive verification process, tailored for businesses handling sensitive information. Our system performs detailed scans to validate data against rigorous standards, confirming accuracy and reliability. For added precision, we offer an add-on service for personal data verification, including email, phone numbers, identification documents, banking details, UUIDs, IP addresses and more. This service is essential for maintaining data quality and adherence to regulatory compliance, providing businesses with the assurance that their data upholds the strictest verification criteria",
    title_2: "Enhanced Verification Services.",
    position: "right"
    }

const step5:about_content_type = {
    sub_title: "Step 5",
    title: "Export & Schedule.",
    sm_des: "Optimize your workflows with Pipeline's data export scheduler. Automate your exports to sync with your business's operational timeline, eliminating manual processes. This tool ensures that your data is processed and ready for use on schedule, supporting continuous data analysis, reporting, and system updates. It's an essential feature for any business looking to maintain a steady stream of current and actionable data.",
    title_2: "Scheduled Data Exports.",
    position: "left"
    }


const Pipeline = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <PipelineHero />
                <PipelineTitle line1="Simplified Migration Solutions" line2=""/>
                <Showcase />   
                <StepsPipeline />     
                {/* <Punchline line1="We make it easy" line2="To migrate large volumes of data"/>   */}
            {/* <Steps data={step1} />
            <Steps data={step2} />


                <Steps data={step3} />
                <Steps data={step4} /> */}
                {/* <Steps data={step5} /> */}
                {/* <BenefitsPipeline /> */}
                <CoreFeaturesHomeTwo />
                <Punchline line1="Like what you see?" line2="Let's have a chat." />
            </main>
            <FooterOne />
        </>
    );
};

export default Pipeline;