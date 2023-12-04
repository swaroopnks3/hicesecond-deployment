import React, { Component } from "react"; 
import Footer from "../inc/footer";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";


function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
      const formEle = document.querySelector("form");
      e.preventDefault();
      console.log("Hello")
      const formData = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbygPVbxm3k0mjGsYsigcqjIKtB3-rcUUrGfPFNDcRP6SWTt7t2l6PYEt5WEp4FiA_GWjw/exec", {
        method: "POST",
        body: formData
      }
      )
      const n = document.getElementById("name");
      const e1 = document.getElementById("email");
      const m = document.getElementById("message");
      const x = document.getElementById("mes");
        x.innerHTML = "Thank You for contacting us we will get back to you soon!, Thank You for your patience";     
        n.value = "";
        e1.value = "";
        m.value = "";    
    };
  
        return(
            <>
            <Helmet>
                <title>Contact Us Page Hice India</title>
                <meta name="description" content="Your Trusted Partner for Talent Acquisition and Corporate Excellence. We understand that exceptional talent is the driving force behind every successful organization."/>
                <link rel="canonical" href="/contact" />
            </Helmet>
            <div>
                <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Contact Us</h1>
            </section>
            <section className="py-5">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3598134297745!2d76.74148607482002!3d10.93616925622729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba866bd6aaaaaab%3A0xc650b8a75e7b51f0!2sKarunya%20Institute%20of%20Technology%20and%20Sciences%20(Deemed%20University)!5e0!3m2!1sen!2sin!4v1691653825806!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-body py-4">
                                        <h4>Get in touch with us</h4>
                                        <div className="underline mb-3"></div>
                                        <form ref={form} onSubmit={sendEmail} className="form">
                                            <label for="">Name</label>
                                            <input type="text" placeholder="Enter your name" class="form-control mb-3"  name="Name" id="name"/>
                                            <label for="">Email</label>
                                            <input type="email" placeholder="Enter your Email" class="form-control mb-3" name="Email" id="email"/>
                                            <label for="">Message</label>
                                            <textarea type="text" rows="3" className="form-control mb-3"  name="Message" id="message" />
                                            <button type="submit" className="btn btn-primary w-100" value="Send">Submit</button>
                                            <label for="" className="mes" id="mes" style={{color:"green"}}></label>

                                        </form>

                                    </div>
                                    </div>
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