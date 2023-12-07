import { StaticImageData } from "next/image";


interface testimonial_data_type {
    id: number;
    avatar: StaticImageData;
    sub_title: string;
    title: string;
    sm_des: string;
}

export default testimonial_data_type