import React from "react"; 
import Slider from '../inc/Slider';
import Mv from './includes/Mv';
import Footer from '../inc/footer';
import Wcu from '../inc/Wcu';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



function Home (){

    
    const navigate = useNavigate();
        return(
            <>
            <Helmet>
                <title>Home Page Hice India</title>
                <meta name="description" content="Welcome To Hice India, Your Trusted Partner for Talent Acquisition and Corporate Excellence"/>
                <link rel="canonical" href="/" />
            </Helmet>
    
            <div>   
                <Slider/>
                <Mv/>
                <Wcu/>
                <section className="py-5">
                    <div class="container">
                    <div className="col-md-12">
                        <h4>Our Services</h4>
                        <div className="underline mb-3"></div>
                    </div> 
                    <div class="row">
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-1">
                            <h3>Permanent Staffing</h3>
                            <p>Our dedicated team works diligently to understand your organization's unique requirements and culture, ensuring a seamless process in identifying and recruiting full-time employees for permanent positions.</p>
                        </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-2">
                            <h3>Contract Staffing</h3>
                            <p>Gain access to top-tier professionals for fixed-term contracts, enabling your organization to execute critical projects with agility and expertise.</p>
                        </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-3">
                            <h3>Industry-Specific Recruitment</h3>
                            <p>Our expertise extends across various industries, allowing us to tailor our recruitment strategies to match the specialized skills and experiences required by specific sectors.</p>
                        </div>
                        </div>
                        
                    </div>


                    <div class="row">
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-1">
                            <h3>Interviews and Screening</h3>
                            <p>We conduct comprehensive initial interviews and screening processes to present you with a shortlist of highly qualified candidates.</p>
                        </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-2">
                            <h3>Onboarding Support</h3>
                            <p>Streamline the onboarding process with our assistance, ensuring that hired candidates transition smoothly into their new roles.</p>
                        </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="card card-3">
                            <h3>Consulting Services</h3>
                            <p>Our HR consulting and advisory services provide strategic guidance on workforce planning, talent management, and recruitment strategies to optimize your organization's potential.</p>
                        </div>
                        </div>
                        <button type="button" className="btn btn-secondary btn-lg  " onClick={() => navigate("/services")} >Explore more services by Hice India</button>
                            
                
                    </div>
                    </div>
                </section>
                <Footer/>
            </div>
            </>
        )
    }
    

export default Home;
