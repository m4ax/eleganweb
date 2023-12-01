import Hosting from "../../../components/uploader";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Streamline Onboarding with Uploader: Self-Serve Data Migration for SaaS",
  description: "Empower clients to migrate their data seamlessly with Uploader. Our embeddable tool automates data cleaning and mapping, saving time and resources for both you and your clients.",
  keywords: ["SaaS onboarding", "self-serve data migration", "data cleaning", "data mapping", "csv importer", "data integration", "automation", "API integration", "onboarding experience", "data migration tool"]
}

const index = () => {
  return (
    <>
      <Hosting />
    </>
  );
};

export default index;
