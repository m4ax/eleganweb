import Link from "next/link";
import Image from "next/image";
import core_features_data from "../../data/core-features-data";


interface title_content_type {
    line1: string;
    line2: string;
}


const PipelineTitle: React.FC<title_content_type> = ({ line1, line2 }) =>  {

    if (line2 === "") {
        return (
<>
            <section className="pt-100 pb-40">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title text-center mb-75">
                                <h2>{line1}</h2>
                                <p className="para-size">Pipeline by Elegan redefines data transformation and migration for modern businesses. Integrating AI and ML, this tool is ideal for clients requiring comprehensive internal and external data transformation. Pipeline simplifies complex data tasks, from connecting databases to exporting data, while ensuring data integrity and compliance.</p>
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
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-8 offset-xl-2">
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
    );
};

export default PipelineTitle;