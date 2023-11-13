import Link from "next/link";
import Image from "next/image";
import core_features_data from "../../data/core-features-data";


interface title_content_type {
    line1: string;
    line2: string;
}


const Punchline: React.FC<title_content_type> = ({ line1, line2 }) =>  {

    if (line2 === "") {
        return (
            <section>
                <section className="core-features-area white-bg pt-135 pb-20">
                    <div className="container">
                        <div className="row align-items-center mb-70">
                            <div>
                                <div className="section-title text-center mb-20">
                                    <h2>{line1}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    } else
    return (
        <section>
            <section className="core-features-area white-bg pt-50 pb-60">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div>
                            <div className="section-title text-center mb-40">
                                <h2>{line1}</h2>
                            </div>
                            <div className="section-title text-center mb-40">
                            <h2>{line2}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Punchline;