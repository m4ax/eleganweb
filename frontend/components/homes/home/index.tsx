import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import DomainSearchHomeTwo from "../home-2/DomainSearchHomeTwo";
import PricingHomeOne from "./PricingHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";
import CoreFeaturesHomeThree from "../home-3/CoreFeaturesHomeThree";
import SubscriptinHomeThree from "../home-3/SubscriptinHomeThree";
import IntegrationsHomeThree from "../home-3/IntegrationsHomeThree";
import SimpleSeamless from "./SimpleSeamless";
import Uploader from "../home-3/Uploader"
import Secruity from "../home-2/Secruity";
import PipelinePunch from './PipelinePunch'
import MakeBusinessHomeTwo from "../home-2/MakeBusinessHomeTwo";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <DomainSearchHomeTwo />
        <TestimonailHomeOne />
        <CoreFeaturesHomeThree />
        <PipelinePunch />
        <MakeBusinessHomeTwo />
        <Secruity />
        
        <Uploader />
        <IntegrationsHomeThree />

        {/* <SimpleSeamless line1="It's Simple" line2="It's Seamless" /> */}
        {/* <PricingHomeOne /> */}
        {/* <Product /> */}

        {/* <ChoseAreaHomeOne /> */}
        {/* <MakeBusinessHomeTwo /> */}
        {/* <TestimonailHomeOne /> */}
        {/* <NewsFeedHomeOne /> */}
        {/* <BrandHomeOne /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
