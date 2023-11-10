import React from 'react';
import Image  from 'next/image';
import product1 from '../../public/assets/img/bg/product1.png'


const Showcase = () => {

return (
<section className="core-features-area pt-10 pb-10">
                <div className="container">
                    <Image src={product1} className="img-fluid mb-100" alt="AI Data Cleaning Tool Screenshot"/>
                </div>
</section>
)

}

export default Showcase