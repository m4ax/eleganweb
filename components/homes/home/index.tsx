import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import DomainSearch from "./DomainSearchHomeOne";
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
import MakeBusinessHomeTwo from "../home-2/MakeBusinessHomeTwo";
import CoreFeaturesHomeTwo from "../home-2/CoreFeaturesHomeTwo";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <DomainSearch />
        <ServicesHomeOne />
        <CoreFeaturesHomeThree />
        <CoreFeaturesHomeTwo />
        <SubscriptinHomeThree />
        <PricingHomeOne />
        <MakeBusinessHomeTwo />
        <FAQHomeOne />
        <IntegrationsHomeThree />
        <ChoseAreaHomeOne />
        <TestimonailHomeOne />
        <NewsFeedHomeOne />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
