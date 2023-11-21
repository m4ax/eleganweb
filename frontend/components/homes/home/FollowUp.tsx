import Link from "next/link";
import Image from "next/image";
import core_features_data from "../../data/core-features-data";


interface title_content_type {
    line1: string;
    line2: string;
}


const FollowUp: React.FC<title_content_type> = ({ line1, line2 }) =>  {

    if (line2 === "") {
        return (
            <>
                <section className="core-features-area white-bg pt-115 pb-60">
                    <div className="container">
                        <div className="row align-items-center mb-10">
                            <div>
                                <div className="section-title text-center mb-20">
                                    <h3>{line1}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else
    return (
        <>
            <section className="core-features-area white-bg pt-115 pb-60">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div>
                            <div className="section-title text-center mb-40">
                                <h3>{line1}</h3>
                            </div>
                            <div className="section-title text-center mb-40">
                            <h3>{line2}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FollowUp;