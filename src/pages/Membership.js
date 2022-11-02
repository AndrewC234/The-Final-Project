import React, { Component } from "react";
import Navbar from "../components/Navbar.js";

class Membership extends Component {
    render() {
      return (
        <div>      
          <div className="container">
          <div >
                <h2>Select the plan that is perfect for you today! </h2>
                <h2>In & Out</h2>
                <h4 class="pricer">$12.45</h4>
                <div class="container-fluid">In & Out is our most affordable package. It includes
                    <ul>
                        <li>Daily 60 minutes of access to facilities and workout equipment</li>
                        <li>Access to only your home gym</li>
                        <li>Access to the fortune fitness mobile app</li>

                    </ul>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={form.Membership} onChange={(e) => updateForm({ Membership: e.target.value })}/>
                        <label class="form-check-label pricer" for="flexRadioDefault1">
                          In & Out $12.45
                        </label>
                      </div>
                      
                    <div>
                        <h2>Break a sweat</h2>
                        <h4 class="pricer">$21.99</h4>
                        <div class="container-fluid">The Break a sweat Plan is the way to go it you need more time working on your gains. It includes</div>
                        <ul>
                            <li>Unlimited daily access to facilities and workout equipment</li>
                            <li>Access to only your home gym </li>
                            <li>Access to the Fortune Fitness mobile app</li>
                            <li>Access to events going on at your home gym </li>
                        </ul>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={form.Membership} onChange={(e) => updateForm({ Membership: e.target.value })}/>
                            <label class="form-check-label pricer" for="flexRadioDefault1">
                             Break A sweat $21.99
                            </label>
                          </div>
                    </div>
                    <div>
                        <h2>No Pain No Gain</h2>
                        <h4 class="priceg">$25.99</h4>
                        <div class="container-fluid">The No Pain No Gain plan is for those who like to get a pump in while on the go at one of our many facilities in the ________ area. It includes</div>
                        <ul>
                            <li>unlimited Access to home gym's facility and workout equipment</li>
                            <li>limited 2 hours daily access to other Fortune Fitness facilities and workout equipment </li>
                            <li>Access to the Fortune Fitness mobile app</li>
                            <li>Access to events going on at your home gym</li>
                            <li>Access to home gym's Relax And Unwind lounge room with full body message chairs and the Health is Wealth Fortune Fitness kitchen</li>
                        </ul>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={form.Membership} onChange={(e) => updateForm({ Membership: e.target.value })}/>
                            <label class="form-check-label priceg" for="flexRadioDefault1">
                             No Pain No Gain $25.99
                            </label>
                          </div>
                    </div>
                    <div>
                        <h2>Gym Rat</h2>
                        <h4 class="priceg">$35.00</h4>
                        <div class="container-fluid">If you live in the gym then this plan is for you. It includes </div>
                        <ul>
                            <li>Unlimited Access to home gym's facility and workout equipment</li>
                            <li>Unlimited access to other Fortune Fitness facilities and workout equipment </li>
                            <li>Access to the Fortune Fitness mobile app</li>
                            <li>Access to events going on at all Fortune Fitness facilities</li>
                            <li>Access to all Fortune Fitness's Relax And Unwind lounge room with full body message chairs and the Health is Wealth Fortune Fitness kitchen</li>
                            <li>24 hour access to all of Fortune Fitness facilities and workout equipment</li>
                            
                        </ul>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={form.Membership} onChange={(e) => updateForm({ Membership: e.target.value })}/>
                            <label class="form-check-label priceg" for="flexRadioDefault1">
                             Gym Rat $35.00
                            </label>
                          </div>
                    </div>
                </div>
                <input class="btn btn-primary " type="submit" value="Continue to payment" onSubmit={onSubmit} route="./payment"/>
            </div>
          </div>
        </div>
      );
    }
  }

  
  export default Membership;
  
