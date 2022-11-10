import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import './Home.css';



class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

        <div class = "body">

          <div class = "titleHome">
                  <h1 class = "h1">Fortune Fitness</h1>
          </div>

              <div class = "photoSummary">
                  <div class = "photo">
                      <img src="/images/Main Home Photo.jpg" />
                  </div>
                  <div class = "summary">
                      <p>
                          Here at fitness fortune OUR goal is to help you reach YOUR goals any way we can. With our large and ever growing community we hope that you are 
                          able to find activities and people that you enjoy. With our wide variety of equipment and trainer knowledge we know you will be fortunate to have joined us!
                      </p>
                  </div>
              </div>

              <div class = "calender">
                  <img src="/images/Week.JPG" />
              </div>

              <div class = "classes">

                  <p>
                      <b>Yoga:</b> Consists of deliberate, concentrated movements and postures designed to promote flexibility, tone and strengthen muscles, and align the body. Breathing 
                      techniques are also focused on along with the movements allowing participants to take part in a relacing experience.
                  </p><br />
                  <p>
                      <b>Pilates:</b> While Yoga focuses on strength and flexibility through long held, swift-moving postures and “grounding” positions, Pilates emphasizes core with repetitive
                      and small movements of isolated or full body muscle groups.
                  </p><br />
                  <p>
                      <b>Circuit Training:</b> Interval-style, fast paced, shorter routine as a series of exercises that complete a circuit. Complete one exercise (usually in a station) for 
                      anywhere from 30 seconds to a minute, and then move on to the next station/exercise for another 30 seconds to a minute with a brief break once a ful circuit is complete.
                  </p><br />
                  <p>
                      <b>Zumba:</b> A series of energetic dance routines that provide a great cardio exertion by mixing low intensity and high intensity moves for an interval-style, calorie 
                      burning, dance fitness party.
                  </p><br />
                  <p>
                      <b>Kickboxing:</b> A martial-arts style of fitness that provides a great cardiovascular workout and helps build endurance, coordination, tones muscles and core, all 
                      while working the heart and burning a lot of calories. Require weighted bags and intervals of punching and kicking in a small group setting, class-style setting, or in 
                      individual stations with weighted bags.
                  </p><br />
                  
              </div>

            </div> 

        </div>
      </div>
    );
  }
}

export default Home;