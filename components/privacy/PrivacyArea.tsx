

interface privacy_data_type {
    id: number;
    style_cls: string;
    qustion: string;
    ans1: JSX.Element;
    ans2: JSX.Element;
}[]

const privacy_data: privacy_data_type[] = [
    {
        id: 1,
        style_cls: "", 
        qustion: "01. Introduction?",
        ans1: <>Our commitment to your privacy is paramount. This Privacy Policy explains our practices regarding the collection, use, and protection of your information when engaging with our data migration services. By using our services, you consent to the procedures described in this policy.
        </>,
        ans2: <></>,
    },
    {
        id: 2,
        style_cls: "",
        qustion: "02. Our Infrastructure",
        ans1: <>We manage our own infrastructure, ensuring full control over the data processing environment. This approach allows us to implement bespoke security measures and maintain a high standard of data protection.</>,
        ans2: <></>,
    },
    {
        id: 3,
        style_cls: "",
        qustion: "03. Data Collection and Use",
        ans1: <>Elegan collects essential personal information for account management purposes. For data migration services, while we process client data, we do not retain it after the completion of migration tasks. This data, in its anonymized and aggregated form, may be used to train our algorithms, enhancing our service efficiency and capabilities.</>,
        ans2: <></>,
    },
    {
        id: 4,
        style_cls: "",
        qustion: "04. Option to Opt-Out",
        ans1: <>Clients have the option to opt-out of having their anonymized data used for algorithm training. We respect the privacy choices of our clients and provide easy-to-use mechanisms for opting out.</>,
        ans2: <></>,
    },
    {
        id: 5,
        style_cls: "",
        qustion: "05. Data Rights", 
        ans1: <>Clients have the right to access, correct, delete, and request the portability of their personal data. We are committed to facilitating these rights in compliance with applicable data protection laws.</>,
        ans2: <></>,
    },
    {
        id: 6,
        style_cls: "",
        qustion: "06. Data Secruity",
        ans1: <>At Elegan, our approach to data security is comprehensive and rigorous. Recognizing the critical nature of the data we handle, we have implemented a multi-layered security strategy within our self-hosted infrastructure. This includes advanced encryption protocols for data in transit and at rest, ensuring that all client information is securely encrypted. We regularly update and patch our systems to guard against vulnerabilities and employ continuous monitoring to detect and respond to any security threats promptly. Additionally, access to sensitive data is strictly controlled and limited to authorized personnel only, with regular audits to ensure compliance with our strict access policies. This robust framework ensures that data, while in our care, is protected against unauthorized access, alteration, and destruction, thereby upholding our commitment to maintaining the highest standards of data security.</>,
        ans2: <></>,
    },
    {
        id: 7,
        style_cls: "",
        qustion: "07. Policy Updates",
        ans1: <>We may update this Privacy Policy periodically. Clients will be notified of significant changes and will have the opportunity to review the revised policy.</>,
        ans2: <></>,
    },
    {
        id: 8,
        style_cls: "",
        qustion: "08. Contact Information",
        ans1: <>For any queries or concerns about our privacy practices, please contact us at info@elegan.io. We take privacy concerns seriously and are committed to addressing any issues promptly.</>,
        ans2: <></>,
    }

]

const PrivacyArea = () => {
    return (
        <>
            <section className="privacy area gray-bg pb-65">
                <div className="container">
                    {privacy_data.map((item, i) => 
                        <div key={i} className="row">
                            <div className="col-xl-12">
                                <div className={`privacy-heading ${item.id === 1 && "mt-110"} mb-55`}>
                                    <h3>{item.qustion}</h3>
                                    <p className={item.style_cls}>{item.ans1}</p>
                                    <p>{item.ans2}</p>
                                </div>
                            </div>
                        </div>                    
                    )} 
                </div>
            </section>
        </>
    );
};

export default PrivacyArea;