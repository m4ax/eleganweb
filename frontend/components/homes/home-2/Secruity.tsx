"use client"
import DomainSearchBox from "../../common/DomainSearchBox";
// domain type
interface domain_content_type {
    title: string;
    sm_des: string;
}
// domain content
const domain_content: domain_content_type = {
    title: "Eradicate Painful Data Onboarding",
    sm_des: "Ipsum dolor sit amet, consectetur Lorem adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
}
const {title, sm_des}  =  domain_content


const Secruity = () => {
    return (
        <>
            <section className="pt-150">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 offset-xl-2 mb-50">
                            <div className="section-title text-center mb-5 mt-20 ">
                                <h2>{title}</h2>
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

export default Secruity;