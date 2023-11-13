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
<>
            <section className="pt-100 pb-40">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-75">
                                <h2>{line1}</h2>
                                {/* <p>{sm_des}</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <DomainSearchBox />  */}
                </div>
            </section>
        </>
        );
    } else
    return (
        <>
            <section className="pt-100 pb-40">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-75">
                                <h2>{line1}</h2>
                                {/* <p>{sm_des}</p> */}
                            </div>
                            <div className="section-title text-center mb-75">
                                <h2>{line2}</h2>
                                {/* <p>{sm_des}</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <DomainSearchBox />  */}
                </div>
            </section>
        </>
};

export default Punchline;