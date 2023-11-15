import Image from "next/image";
import faq_img from "../../public/assets/img/bg/faq01.png";

// accordion data type
interface accordion_data_type {
    id: number;
    question: string;
    answer: JSX.Element;
    accordion_id: string;
    collapsed: string;
    aria_expanded: boolean;
    show: string;
}
// accordion data
 const accordion_data: accordion_data_type[] = [
        {
            id: 1,
            question: "How does your Affiliate Program work?",
            answer: <> Elegan's affiliate marketing is a performance-based marketing program where affiliates earn a commission for promoting our products or services, through a unique affiliate link.</>,  
            accordion_id: "One",
            collapsed: "", 
            aria_expanded: true, 
            show: "show"
        },
        {
            id: 2,
            question: "What is the revenue share?",
            answer: <>You will earn 20% of on-going revenue from each validated customer. You will be paid monthly.</>,    
            accordion_id: "Two",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 3,
            question: "How long does the affiliate cookie last?",
            answer: <>The cookie will last 90 days.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 4,
            question: "How do I get started or find out more information?",
            answer: <>Please book a call with us to discuss how we can work together.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },

 ]

const faq_content = {
    title: "FAQ",
    sm_info: "Find out how we can work together.",
}
const {title, sm_info}  = faq_content

const FAQArea = ({style}: any) => {
    return (
        <> 
           <div className={`faq-area ${style && "pt-115"} pb-90`}>
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title  text-center mb-70">
                            <h2>{title}</h2>
                            {/* <p>{sm_info}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-box faq_style faq-box-white">
                                <div className="accordion" id="accordionExample">
                                    {accordion_data.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                <button
                                                className={`accordion-button ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}`}>
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}`}
                                                data-bs-parent="#accordionExample" >
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                         </div>
                                    ))}  
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-right-content text-center">
                                <Image className="bounce-animate" src={faq_img} alt="elegan-data-migration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default FAQArea;