import { StaticImageData } from "next/image";
import feature_img_1 from "../../public/assets/img/icon/core.png";
import feature_img_2 from "../../public/assets/img/icon/core1.png";
import feature_img_3 from "../../public/assets/img/icon/core2.png";
import feature_img_4 from "../../public/assets/img/icon/core4.png";
import feature_img_5 from "../../public/assets/img/icon/core5.png";
import feature_img_6 from "../../public/assets/img/icon/core6.png";

import feature_img_1_1 from "../../public/assets/img/icon/cf1.png";
import feature_img_1_2 from "../../public/assets/img/icon/cf2.png";
import feature_img_1_3 from "../../public/assets/img/icon/cf3.png";
import feature_img_1_4 from "../../public/assets/img/icon/cf4.png";
import feature_img_1_5 from "../../public/assets/img/icon/cf5.png";
import feature_img_1_6 from "../../public/assets/img/icon/cf6.png";


interface core_features_data_type {
    id: number;
    img: StaticImageData;
    img_2: StaticImageData;
    delay: string;
    title: string;
    title_2: string;
    sm_des: string;
    sm_des_2: string;
}

const core_features_data: core_features_data_type[] = [
    // for home 02
    {
        id: 1,
        img: feature_img_1,
        img_2: feature_img_1_1,
        delay:"0.7s",
        title: "AI-Powered Precision",
        title_2: "",
        sm_des: "Leverage advanced AI and ML algorithms for precise data mapping and transformation. Pipeline's intelligent system continuously improves, ensuring high accuracy in organizing and formatting data, especially useful for 'messy' semi-structured datasets.",
        sm_des_2: "",
    },
    {
        id: 2,
        img: feature_img_2,
        img_2: feature_img_1_2,
        delay:"0.4s",
        title: "Seamless Legacy Integration",
        title_2: "",
        sm_des: "Easily transition from outdated legacy systems to modern platforms with minimal disruption. Pipeline facilitates smooth data migration, helping businesses upgrade their data infrastructure while maintaining data integrity.",
        sm_des_2: "",
    },
    {
        id: 3,
        img: feature_img_3,
        img_2: feature_img_1_3,
        delay:"0.5s",
        title: "Large-Scale Data Handling",
        title_2: "",
        sm_des: "Efficiently manage and process vast datasets. Pipeline is designed to handle billions of rows of data, making it ideal for enterprises dealing with extensive data volumes, ensuring scalability and performance.",
        sm_des_2: "",
    },
    {
        id: 4,
        img: feature_img_4,
        img_2: feature_img_1_4,
        delay:"1s",
        title: "Automated Data Compliance:",
        title_2: "",
        sm_des: "Stay compliant with industry regulations effortlessly. Pipeline automates crucial compliance checks, keeping your data in line with legal and ethical standards, essential for businesses handling sensitive information.",
        sm_des_2: "",
    },
    {
        id: 5,
        img: feature_img_5,
        img_2: feature_img_1_5,
        delay:"0.7s",
        title: "No-Code Friendly Interface",
        title_2: "",
        sm_des: "Enjoy an intuitive interface that simplifies complex data tasks. Pipeline is designed for both technical and non-technical users, making advanced data processing accessible to a wider audience within your organization.",
        sm_des_2: "",
    },
    {
        id: 6,
        img: feature_img_6,
        img_2: feature_img_1_6,
        delay:"0.9s",
        title: "Robust Data Security",
        title_2: "",
        sm_des: "Ensure the highest level of data security with Pipeline. Our commitment to data protection includes encrypted transmission and storage, giving you peace of mind that your sensitive information is safeguarded against unauthorized access.",
        sm_des_2: "",
    }, 
]

export default core_features_data