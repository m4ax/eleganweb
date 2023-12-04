import Login from "../../../components/login";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Login Page | Elegan Data Integration & Migration",
  description: "Login to your Elegan account to begin migrating CSVs, JSON, and SQL data to your database. If you don't have an account, sign up for free.",
}


const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default index;
