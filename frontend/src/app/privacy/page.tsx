import Privacy from "../../../components/privacy";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Page",
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