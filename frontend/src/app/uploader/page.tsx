import Hosting from "../../../components/uploader";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Streamline Data Onboarding with Uploader: Self-Serve Data Migration for SaaS",
  description: "Empower clients to migrate their data seamlessly with Uploader. Our embeddable tool automates data cleaning and mapping, saving time and resources for both you and your customers.",
  keywords: ["SaaS onboarding", "data ingestion", "data cleaning", "data mapping", "csv importer", "data integration", "API integration", "onboarding experience", "data migration tool"]
}

const index = () => {
  return (
    <>
      <Hosting />
    </>
  );
};

export default index;
