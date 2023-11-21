import Link from "next/link";

const DomainSearchBox = ({style}: any) => {
    return (
        <>
            <section className={`${style && "domain-search-section"}`}>
                <div className={`${style && "container"}`}>
                    <div className={`${style && "domain-box"}`}>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="domain-list mt-35 text-center">
                                    <ul>
                                        <li><Link href="#"><span>Uploader</span></Link></li>
                                        <li><Link className="active" href="#"><span>Pipeline</span></Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DomainSearchBox;