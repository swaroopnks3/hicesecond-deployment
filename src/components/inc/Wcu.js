import React from "react";
import hice_wcu from '../images/Hice-India-Wcu.png';

function Wcu(){
    return(
        <div>
            <div class="container">
                <div className="col-md-12">
                    <h4 class="wcu-h">Why choose Hice India?</h4>
                    <div className="underline mb-3"></div>
                </div> 
                <div class="row">
                        <div class="col-md-9">
                        <div class="cardw card-1w card-img-left">
                        <ul> 
                            <li><i>Unparalleled Expertise</i></li> <p>Our deep understanding of various industries enables us to source candidates with the right skills and cultural fit for your organization.</p>
                        </ul>
                        <hr/>
                        <ul> 
                            <li><i>Comprehensive Services</i></li>  <p>From permanent staffing to temporary placements, executive search to HR consulting, we offer a wide range of services to cater to your specific needs.</p>
                        </ul>
                        <hr/>
                        <ul> 
                            <li><i>Personalized Approach</i></li>  <p>We take the time to understand your organization's goals and requirements, ensuring a tailor-made solution that aligns with your strategic vision.</p>
                        </ul>
                        <hr/>
                        <ul> 
                            <li><i>Extensive Talent Pool</i></li>  <p>Our vast network of top-notch professionals allows us to swiftly connect you with exceptional candidates, reducing time-to-hire and enhancing efficiency.</p>
                        </ul>
                        <hr/>
                        <ul> 
                            <li><i>Result-Oriented Strategies</i></li>  <p>We employ cutting-edge recruitment methodologies and assessment tools to identify candidates who best match your criteria.</p>
                        </ul>
                        <hr/>
                        <ul> 
                            <li><i>Commitment to Quality</i></li>  <p>Our rigorous screening and interview process guarantees that only the most qualified and suitable candidates are presented to you.</p>
                        </ul>
                        <hr/>
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="cardw card-1w">
                            <img src={hice_wcu}/>
                        </div>
                        </div>
                        
                        </div>
            </div>
        </div>
    )
}

export default Wcu;