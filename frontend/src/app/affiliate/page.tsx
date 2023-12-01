import Affiliate from "../../../components/affiliate";
import Head from 'next/head'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "How do affiliate sales work?",
  description: "Learn how to earn commission from driving affiliate sales. You'll get 20% of lifetime sales from your referrals.",
}


const index = () => {
  


  return (
    <>
      <Affiliate />
    </>
  );
};

export default index;
