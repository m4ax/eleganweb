import Contact from "../../../components/contact";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Elegan | Contact Us",
  description: "We would love to speak with you. Give us a call or drop us an email.",
}


const index = () => {


  return (
    <>
      <Contact />
    </>
  );
};

export default index;
