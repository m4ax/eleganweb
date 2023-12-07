import testimonial_data_type from "../types/testimonial-data-type";
 
import testimonial_avatart_1 from "../../public/assets/img/author/author.png";
import testimonial_avatart_2 from "../../public/assets/img/author/author1.png"; 
import photo2 from "../../public/assets/img/author/photo2.png"; 


const testimonial_data: testimonial_data_type[] = [
    {
        id: 1,
        avatar: testimonial_avatart_1,
        title: "Data Complexity",
        sub_title: "We can handle dirty data.",
        sm_des: "Worried about semi-structured or 'messy' data? Our AI Context Validation & Transformation system intelligently comprehends and restructures complex data formats. We specialize in detecting and correcting errors, automatically mapping and cleaning data. Our user-friendly tools enable non-technical users to confidently navigate and transform data, ensuring accurate and logical data organization.",
    },
    {
        id: 2,
        avatar: photo2,
        sub_title: "Process trillions of rows.",
        title: "Data Volume",
        sm_des: "Want to process large data volumes? Our system is equipped to process billions of rows, transforming bulky data loads into manageable, organized structures. This empowers businesses to migrate substantial data with ease, leveraging our cloud-integrated AI/ML technologies for efficient data ingestion and aggregation.",
    },
    {
        id: 3,
        avatar: testimonial_avatart_1,
        sub_title: "Peace of mind approach.",
        title: "Data Security",
        sm_des: "At Elegan, we prioritise the safety and integrity of your data through our secure data migration services. Our solutions are meticulously designed with robust security measures and adherence to compliance standards. We can also cater to particular legal and industry-specific regulations.  Our secure, compliant data transformation processes, fortified by advanced data encryption and privacy protection protocols. ",
    },  
]
export default testimonial_data