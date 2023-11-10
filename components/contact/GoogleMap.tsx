
import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <section className="map-area pt-100">
                <div className="container">
                <div id="contact-map" className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.376503090172!2d-2.0961714227516826!3d51.89059287190299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711b0943081e4f%3A0x698e221b09c2e6a!2sHatherley%20Ct%20Rd%2C%20Cheltenham%2C%20UK!5e0!3m2!1sen!2s!4v1699603799636!5m2!1sen!2s"
                    width="100%"
                    height="450px"
                    style={{border:0}}
                    allow-full-screen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMap;