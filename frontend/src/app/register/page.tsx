import Register from "../../../components/register";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Register Page",
  description: "Register for an Elegan account to begin migrating CSVs, JSON, and SQL data to your database. You can sign up for free.",
}

const index = () => {
    return (
        <>
            <Register />
        </>
    );
};

export default index;