import React from "react";
import Footer from "../inc/footer";
import { Helmet } from "react-helmet-async";



function Services(){
    

    return(

        <>
            <Helmet>
                <title>Services Page Hice India</title>
                <meta name="description" content="Welcome To Hice India, Your Trusted Partner for Talent Acquisition and Corporate Excellence. At HICE India, we understand that exceptional talent is the driving force behind every successful organization."/>
                <link rel="canonical" href="/services" />
            </Helmet>
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Our Services</h1>
            </section>
            <div>
            <section className="py-5">
                <div class="container">
                    <div class="row bgc">
                                <div class="col-md-6">
                                    <h3>Permanent Staffing</h3>
                                    <p>Our dedicated team works diligently to understand your organization's unique requirements and culture, ensuring a seamless process in identifying and recruiting full-time employees for permanent positions.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Contract Staffing</h3>
                                    <p>Gain access to top-tier professionals for fixed-term contracts, enabling your organization to execute critical projects with agility and expertise.</p>
                                
                                </div>
                    </div> 
                    

                                                                    
                    <div class="row">
                    <div class="col-md-6">
                                    <h3>Executive Search</h3>
                                    <p>For leadership positions, our specialized executive search service scours the talent pool to secure top-level executives, senior management, and C-suite professionals.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Industry-Specific Recruitment</h3>
                                    <p>Our expertise extends across various industries, allowing us to tailor our recruitment strategies to match the specialized skills and experiences required by specific sectors.</p>
                                
                                </div>                                       
                    </div>
                    

                    <div class="row bgc">
                    <div class="col-md-6">
                                    <h3>Skill Assessments</h3>
                                    <p>Rest assured that candidates' qualifications align with your needs through our thorough skill assessments and proficiency tests.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Interviews and Screening</h3>
                                    <p>We conduct comprehensive initial interviews and screening processes to present you with a shortlist of highly qualified candidates.</p>
                                
                                </div>                                        
                    </div>
                    

                    <div class="row">
                    <div class="col-md-6">
                                    <h3>Background Checks and Reference Verification</h3>
                                    <p>Our meticulous background checks and employment verifications ensure that the candidates we recommend are the best fit for your organization.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Candidate Matching and Preselection</h3>
                                    <p>Leveraging our extensive network and industry insights, we match candidates with suitable job openings, presenting you with a preselected list of top-notch professionals.</p>
                                
                                </div>                                   
                    </div>
                    

                    <div class="row bgc">
                                <div class="col-md-6">
                                    <h3>Resume Writing and Professional Development</h3>
                                    <p>To enhance employability, we offer resume writing services and career development support to job seekers, empowering them for their dream roles.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Onboarding Support</h3>
                                    <p>Streamline the onboarding process with our assistance, ensuring that hired candidates transition smoothly into their new roles.</p>
                                
                                </div>
                    </div>
                    

                    <div class="row">
                                <div class="col-md-6">
                                    <h3>Payroll Services</h3>
                                    <p>We take care of payroll and benefits administration for temporary or contract employees, easing your HR burdens.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Consulting Services</h3>
                                    <p>Our HR consulting and advisory services provide strategic guidance on workforce planning, talent management, and recruitment strategies to optimize your organization's potential.</p>
                                
                                </div>
                    </div>
                    
                    <div class="row bgc">
                                <div class="col-md-6">
                                    <h3>Training and Development</h3>
                                    <p>Enhance the skills and knowledge of your employees through our result-oriented training programs and workshops.</p>
                                </div>
                                <div class="col-md-6">
                                
                                    <h3>Other's</h3>
                                    <p>Contact Us any other related services.</p>
                                
                                </div>
                    </div>
                    </div>
                    </section>
            </div>
            

            <Footer/>
        </div>
        </>
    )
}

export default Services;