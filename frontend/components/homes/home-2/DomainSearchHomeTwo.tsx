"use client"
import DomainSearchBox from "../../common/DomainSearchBox";
// domain type
interface domain_content_type {
    title: string;
    sm_des: string;
}
// domain content
const domain_content: domain_content_type = {
    title: "Facilitate Perfect Data Transfer",
    sm_des: ""
}
const {title, sm_des}  =  domain_content


const DomainSearchHomeTwo = () => {
    return (
        <>
            <section className="pt-170 pb-40">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title text-center mb-80">
                                <h2>We help companies migrate, clean and verify data.</h2>
                            </div>
                        </div>
                    </div>
                    {/* <DomainSearchBox />  */}
                </div>
            </section>
        </>
    );
};

export default DomainSearchHomeTwo;