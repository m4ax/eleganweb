import Image, { StaticImageData } from "next/image";

import integrations_img_1 from "../../../public/assets/img/icon/int2.png";
import integrations_img_2 from "../../../public/assets/img/icon/int1.png";
import integrations_img_3 from "../../../public/assets/img/icon/int3.png";
import integrations_img_4 from "../../../public/assets/img/icon/int4.png";
import integrations_img_5 from "../../../public/assets/img/icon/int5.png";
import integrations_img_6 from "../../../public/assets/img/icon/int6.png";
import integrations_img_7 from "../../../public/assets/img/icon/intover.png";
import integrations_img_8 from "../../../public/assets/img/icon/int7.png";
interface integrations_data_type {
    id: number;
    img: StaticImageData;
    delay: string;
}
const integrations_data: integrations_data_type[] = [
    {id: 1, img: integrations_img_1, delay: ".2s"},
    {id: 2, img: integrations_img_2, delay: ".3s"},
    {id: 3, img: integrations_img_3, delay: ".4s"},
    {id: 4, img: integrations_img_4, delay: ".5s"},
    {id: 5, img: integrations_img_5, delay: ".6s"},
    {id: 6, img: integrations_img_6, delay: ".7s"},
    {id: 7, img: integrations_img_7, delay: ".8s"},
    {id: 8, img: integrations_img_8, delay: ".9s"},
]
const IntegrationsHomeThree = () => {
    return (
        <>
            <section className="integrations-area pt-110 pb-60" style={{backgroundImage: `url(/assets/img/bg/makebg.jpg)`}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 offset-xl-3">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title section-title-white text-center mb-100">
                                     <h2>Integrations</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="row text-center">
                        {integrations_data.map((item, i) => 
                            <div key={i} className="col-lg-3 col-md-3 col-sm-6">
                                <div className="int-img wow fadeInUp" data-wow-delay={item.delay}>
                                    <Image src={item.img} alt="integration-provider-logo" />
                                </div>
                            </div>                        
                        )} 
                     </div>
                </div>
            </section>
        </>
    );
};

export default IntegrationsHomeThree;