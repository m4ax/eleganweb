import Link from "next/link";
import Image from "next/image";
import product1 from '../../../public/assets/img/bg/product1.png'


const Product = () => {
    return (
        <>
           <section className="pricing-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>AI Suggestions</h2>
                                {/* <p>Based on your defined schema, we'll make suggestions on how to 
                                    achieve your end goal. The more data that comes in, the better we'll
                                    get at making suggestions.</p> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={product1} className="img-fluid" alt="AI-Data-Migration-Tool"/>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pricing-more-link text-center mt-50">
                                 <p><Link href="#">See migration details</Link> and pricing for more information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Product;

/* <div className="container">
<div className="row">
    <div className="col-12">
        <div className="slider-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
            <Image src={business1}  alt="elegan-data-migration" />
        </div>
    </div>
</div>
</div>

*/