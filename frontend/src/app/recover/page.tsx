import Recover from "../../../components/recover";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Password Reset Page | Elegan Data",
  description: "Reset the password to your Elegan account.",
}

const index = () => {
  return (
    <>
      <Recover />
    </>
  );
};

export default index;
