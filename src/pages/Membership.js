import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import './Membership.css';


class Membership extends Component {
  render() {
    return (
      <div>  
        <Navbar />    
        <div class = "body">

            <div class = "main">




            
                <h1>Select the plan that is perfect for you today! </h1>

                <div class = "option1">
                    
                    <h3>In & Out ($12.45)</h3>
                    <p>In & Out is our most affordable package. Includes:</p>
                    
                    <ul>

                        <li>Daily 60 minutes of access to facilities and workout equipment</li><br></br>
                        <li>Access to only your home gym</li><br></br>
                        <li>Access to the fortune fitness mobile app</li><br></br>

                    </ul>

                    <div class = "form">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>

                        <label class="form-check-label pricer" for="flexRadioDefault1">
                        In & Out $12.45
                        </label>

                    </div>

                </div>

                <div class = "option2">

                    <h3>Break a Sweat ($21.99)</h3>
                    <p>The Break a Sweat Plan is the way to go it you need more time working on your gains. Includes:</p>

                    <ul>

                        <li>Unlimited daily access to facilities and workout equipment</li><br></br>
                        <li>Access to only your home gym </li><br></br>
                        <li>Access to the Fortune Fitness mobile app</li><br></br>
                        <li>Access to events going on at your home gym </li><br></br>
                        
                    </ul>
                    
                    <div class = "form">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                        <label class="form-check-label pricer" for="flexRadioDefault1">
                        Break A sweat $21.99
                        </label>

                    </div>

                </div>

                <div class = "option3">

                    <h3>No Pain No Gain</h3>
                    <p>The No Pain No Gain plan is for those who like to get a pump in while on the go at one of our many facilities in the ________ area includes:</p>
                    
                    <ul>

                        <li>Unlimited Access to home gym's facility and workout equipment</li><br></br>
                        <li>Limited 2 hours daily access to other Fortune Fitness facilities and workout equipment </li><br></br>
                        <li>Access to the Fortune Fitness mobile app</li><br></br>
                        <li>Access to events going on at your home gym</li><br></br>
                        <li>Access to home gym's Relax And Unwind lounge room with full body message chairs and the Health is Wealth Fortune Fitness kitchen</li><br></br>

                    </ul>

                    <div class = "form">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                        <label class="form-check-label priceg" for="flexRadioDefault1">
                        No Pain No Gain $25.99
                        </label>

                    </div>

                </div>

                <div class = "option4">

                    <h3>Gym Rat ($35.00)</h3>
                    <p>If you live in the gym then this plan is for you. Includes:</p>

                    <ul>
                        <li>Unlimited Access to home gym's facility and workout equipment</li><br></br>
                        <li>Unlimited access to other Fortune Fitness facilities and workout equipment </li><br></br>
                        <li>Access to the Fortune Fitness mobile app</li><br></br>
                        <li>Access to events going on at all Fortune Fitness facilities</li><br></br>
                        <li>Access to all Fortune Fitness's Relax And Unwind lounge room with full body message chairs and the Health is Wealth Fortune Fitness kitchen</li><br></br>
                        <li>24 hour access to all of Fortune Fitness facilities and workout equipment</li><br></br>
                        
                    </ul>

                    <div class = "form">

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                        <label class="form-check-label priceg" for="flexRadioDefault1">
                        Gym Rat $35.00
                        </label>

                    </div>


                </div>

            </div>

        </div>
      </div>  
    );
  }
}

  
export default Membership;