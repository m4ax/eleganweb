"use client"
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useState } from 'react';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Logo from "../../../public/assets/img/logo/logo2.png";
import Image from 'next/image';

const HeaderOne = () => { 
    const [sidebarOppen, setSidebarOppen] = useState(false)
    const [searchOppen, setSearchOppen] = useState(false)
    return (
        <>
            <header>
            <div className={`header-area header-transparent header-space pt-45 pb-45`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/"> <Image src={Logo } alt="elegan-data-migration" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex flex-row-reverse align-items-center justify-content-xl-end">
                            <div className="bar d-none d-xl-block">
                                <button className="info-bar" aria-label="Open menu" onClick={() => setSidebarOppen(true)}><i className="far fa-bars"></i></button>
                            </div>             
                            <div className="header-btn d-none d-md-block">
                                <a className="btn" href="#"><i className="far fa-phone"></i> Let's Chat</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu mean-container d-lg-none"> 
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderOne;