import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import './Signup.css';


class Signup extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div class="body">
                    <h1>Sign Up Today</h1>
                    <br/>

                    <form id="SignUp">

                        <div class="input-field">
                            <label for="First">First Name</label>
                            <input id="first" type="text"/>
                        </div>  

                        <div class="input-field">
                            <label for="last">last Name</label>
                            <input id="last" type="text"/>
                        </div>

                        <div class="input-field">
                            <label for="DOB">Date of birth</label>
                            <input id="DOB" type="text"/>
                        </div>

                        <div class="input-field">
                            <label for="email">E-mail</label> 
                            <input id="email" type="text"/>
                        </div>

                        <div class="input-field">
                            <label for="Address">Address</label> 
                            <input id="address" type="text"/>
                        </div>

                        <div class="input-field">
                            <label for="password">Create a password</label>
                            <input id="password" type="text"/>
                        </div>

                        <button onclick="">Sign Up</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;