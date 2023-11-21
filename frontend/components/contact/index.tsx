import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import Header from "../layout/headers/header";
import ContractArea from "./ContractArea";
import ContractServices from "./ContractServices";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="Contact Us" title="About" />
        <GoogleMap />
        <ContractServices />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;
