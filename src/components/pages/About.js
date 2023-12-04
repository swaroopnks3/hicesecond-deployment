import React from "react";
import Mv from '../pages/includes/Mv';
import Footer from "../inc/footer";
import logo from '../images/Hice India Hice HR Consulting Partner with Hice India Hand Shake.jpg'
import { Helmet } from "react-helmet-async";
function Contact(){
    return(
        <>
            <Helmet>
                <title>About Us Page Hice India</title>
                <meta name="description" content="Welcome To Hice India, Your Trusted Partner for Talent Acquisition and Corporate Excellence. At HICE India, we understand that exceptional talent is the driving force behind every successful organization."/>
                <link rel="canonical" href="/about" />
            </Helmet>
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">About Us</h1>
            </section>
            <section className="py-5">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-12">
                                <h4>About Our Company</h4>
                                <div className="underline mb-3"></div>
                                <p class="pInAbout">
                                At HICE India, we understand that exceptional talent is the driving force behind every successful
organization. As a leading HR Recruitment Service provider, we are dedicated to connecting top-
tier professionals with the best-fit opportunities, elevating businesses to new heights of success With a dynamic blend of experience and expertise, the founders - Dr. J Clement Sudhahar and
Mr. Jai Ganesh Bala - have envisioned a platform that combines human intelligence and cutting-
edge recruitment practices to cater to the diverse needs of businesses across industries.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <Mv/>
                <section className="py-5">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-8">
                                <h4>Partner with HICE India for Your HR Success</h4>
                                <div className="underline mb-3"></div>
                                <p class="pInAbout">
                                When it comes to recruiting top talent and optimizing your human resources, [Agency Name] is
your dedicated partner. Our commitment to excellence and our passion for fostering professional
growth make us the ideal choice for your recruitment needs.
Experience the HICE India difference. Contact us today to unlock the potential of your
workforce and propel your organization to unparalleled success.
Unlock boundless possibilities for your organization&#39;s growth and success with HICE India&#39;s
comprehensive HR Recruitment Services. Partner with us as we navigate the path to Corporate
Excellence through Human Intelligence. Together, let&#39;s build a workforce that drives innovation,
inspires growth, and achieves extraordinary results. Welcome to the future of HR recruitment
excellence with HICE India.
                                </p>
                            </div>
                            <div className="col-md-4">
                            <img src={logo} className="imgAbout" alt="..." width="320" height="30"/>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <Footer/>
        </div>
        </>
    )
}

export default Contact;