import React, { Component } from "react";
import "./ccstyle.css"


class Payment extends Component {
    render() {
    return ( 
    <div>
     <div>
        <div class="container">
            <h1>Confirm Your Payment</h1>
            <div class="first-row">
                <div class="owner">
                    <div>Name on card</div>
                    <div class="input-field">
                        <input type="text"/>
                    </div>
                </div>
                <div class="cvv">
                    <div>cvv</div>
                    <div class="input-field">
                        <input type="password"/>
                    </div>
                </div>
                
            </div>
            <div class="second-row">
                <div class="card-number">
                    <div>Card Number</div>
                    <div class="input-field">
                        <input type="text"/>
                    </div>
                </div>
            </div>
            <div class="third-row">
                <div class="selection">
                <div class="date">
                    <select name="month" id="month">
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
                <select name="year" id="year">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
                        </div>
                        <div class="logos">
                            <img src="../logos/Mc.png"/>
                            <img src="../logos/Pp.png"/>
                            <img src="../logos/Vs.png"/>
                            </div>
                    </div>
                </div>
                <button onclick="">confirm</button>
                </div>
                
            </div>
        </div>
     );
}
}
 
export default Payment;