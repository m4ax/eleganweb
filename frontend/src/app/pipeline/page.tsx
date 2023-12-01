import Pipeline from "../../../components/pipeline";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pipeline: No-Code Solution to Data Ingestion and Migration",
  description: "Migrate data from various formats with ease using our AI-powered tool. Automate data cleaning and simplify your data workflow.",
  keywords: ["data ingestion", "data pipeline", "data migration", "data mapping", "no-code", "AI", "automation", "data cleaning"]
}


const index = () => {
  return (
    <>
      <Pipeline />
    </>
  );
};

export default index;
