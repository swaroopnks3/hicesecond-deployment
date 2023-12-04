import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Hice India India Hice Footer Hice India HiceIndia.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return(
<footer class="footer">
  	 <div class="container container1">
  	 	<div class="row1">
  	 		<div class="footer-col" >
  	 			<h4>company</h4>
           <div className="container">
              <div className="row"> 
                  <div className="col-md-6 me-1" >
                    <img src={logo} className="imgFooter" alt="..." width="30" height="50"/>
                  </div>
                  <div className="pInFooter " >
                    <p>Your Trusted Partner for Talent Acquisition and Corporate Excellence</p>
                  </div>
              </div>
            </div>
           
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul class="ul1">
  	 				<li><Link to="/">Home</Link></li>
  	 				<li><Link to="/about">About Us</Link></li>
  	 				<li><Link to="/services">Our Services</Link></li>
  	 				<li><Link to="/contact">Contact Us</Link></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul class="ul1">
				   <div class="address-links">
				   		<FontAwesomeIcon icon="fa-solid fa-location-dot" />
						<li class="address1"><i class="fa-solid fa-location-dot"></i>Karunya University</li>
						<li><a href=""><i class="fa-solid fa-phone"></i> +91 00000000000000</a></li>
						<li><a href=""><i class="fa-solid fa-envelope"></i> mail@mail.com</a></li>
					</div>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<Link to="#"><i class="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i class="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i class="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i class="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	 <hr class="hr1"/>
	<div className="text-center copyHice p-3">
      © 2023 Hice India. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer;
