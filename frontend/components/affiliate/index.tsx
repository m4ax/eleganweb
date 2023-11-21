import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import PriceArea from "../uploader/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import Breadcrumb from "./../common/breadcrumbs/breadcrumb";
import FAQArea from "./FAQArea";
import IntroVideoArea from "./IntroVideoArea";
import Herotext from './herotext';
import Herotextleft from './herotextleft';

const Affiliate = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Affiliate" title="Affiliate" />
        <Herotext />
        <FAQArea />
        <Herotextleft />
      </main>
      <FooterOne />
    </>
  );
};

export default Affiliate;
