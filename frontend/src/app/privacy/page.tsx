import Privacy from "../../../components/privacy";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Page | Your Data is Safe with Elegan",
  description: "Elegan privacy policy.",
}


const index = () => {
    return (
        <>
            <Privacy />
        </>
    );
};

export default index;