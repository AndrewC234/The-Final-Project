import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "./Exercise.css";


class Exercise extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
        <div class="body">
        <div class = "titleExcercise">
                <h1>List of Exercises</h1>
            </div>

            <div class = "upper">
                <h3>Upper Body Excercises:</h3>
                    <img class = "exerPhoto" src="/images/Bench Press.JPG" />
                    <a href="https://www.youtube.com/watch?v=r-k6o87MZdY" target="_blank">Bench Press</a>
                    <img class = "exerPhoto" src="/images/Bent-Over Dumbbell Row.JPG" />
                    <a href="https://www.youtube.com/watch?v=pYcpY20QaE8" target="_blank">Dumbbell Row</a>
                    <img class = "exerPhoto" src="/images/Chin Ups.JPG" />
                     <a href="https://www.youtube.com/watch?v=rigzbHWbllM" target="_blank">Chin Ups</a>
                    <img class = "exerPhoto" src="/images/Pull Ups.JPG" />
                    <a href="https://www.youtube.com/watch?v=eGo4IYlbE5g" target="_blank">Pull Ups</a>
                    <img class = "exerPhoto" src="/images/Curls.JPG" />
                    <a href="https://www.youtube.com/watch?v=ykJmrZ5v0Oo" target="_blank">Curls</a>
                    <img class = "exerPhoto" src="/images/Dips.JPG" />
                    <a href="https://www.youtube.com/watch?v=TrJVszDm7ik" target="_blank">Dips</a>
                    <img class = "exerPhoto" src="/images/Lateral Pull Down.JPG" />
                    <a href="https://www.youtube.com/watch?v=o--oZLr-aQ8" target="_blank">Lateral Pull Down</a>
                    <img class = "exerPhoto" src="/images/Overhead Press.JPG" />
                    <a href="https://www.youtube.com/watch?v=2yjwXTZQDDI" target="_blank">Overhead Press</a>
                    <img class = "exerPhoto" src="/images/Pec Fly's.JPG" />
                    <a href="https://www.youtube.com/watch?v=Z57CtFmRMxA" target="_blank">Pec Fly</a>
                    <img class = "exerPhoto" src="/images/Seated Row.JPG" />
                    <a href="https://www.youtube.com/watch?v=GZbfZ033f74" target="_blank">Seated Rows</a>
                    <img class = "exerPhoto" src="/images/Triceps Extension.JPG" />
                    <a href="https://www.youtube.com/watch?v=zoU-NBo1OI8" target="_blank">Triceps Extension</a>
            </div>


            <div class = "lower">
                <h3>Lower Body Exercises:</h3>
                    <img class = "exerPhoto" src="/images/Bulgarian Split Squat.JPG" />
                    <a href="https://www.youtube.com/watch?v=3dDOWcEvKA8" target="_blank">Bulgarian Split Squat</a>
                    <img class = "exerPhoto" src="/images/Calf Raises.JPG" />
                    <a href="https://www.youtube.com/watch?v=JbyjNymZOt0" target="_blank">Calf Raises</a>
                    <img class = "exerPhoto" src="/images/Deadlift.JPG" />
                    <a href="https://www.youtube.com/watch?v=r4MzxtBKyNE" target="_blank">Deadlift</a>
                    <img class = "exerPhoto" src="/images/Dumbbell Lunges.JPG" />
                    <a href="https://www.youtube.com/watch?v=D7KaRcUTQeE" target="_blank">Dumbbell Lunges</a>
                    <img class = "exerPhoto" src="/images/Hip Thrust.JPG" />
                    <a href="https://www.youtube.com/watch?v=SEdqd1n0cvg" target="_blank">Hip Thrust</a>
                    <img class = "exerPhoto" src="/images/Kettle Swing.JPG" />
                    <a href="https://www.youtube.com/watch?v=sSESeQAir2" target="_blank">Kettle Swing</a>
                    <img class = "exerPhoto" src="/images/Leg Curl.JPG" />
                    <a href="https://www.youtube.com/watch?v=ELOCsoDSmrg" target="_blank">Leg Curl</a>
                    <img class = "exerPhoto" src="/images/Leg Extension.JPG" />
                    <a href="https://www.youtube.com/watch?v=YyvSfVjQeL0" target="_blank">Leg Extension</a>
                    <img class = "exerPhoto" src="/images/Leg Press.JPG" />
                    <a href="https://www.youtube.com/watch?v=IZxyjW7MPJQ" target="_blank">Leg Press</a>
                    <img class = "exerPhoto" src="/images/Squat.jpg" />
                    <a href="https://www.youtube.com/watch?v=SW_C1A-rejs" target="_blank">Squat</a>
            </div>

            
            <div class = "core">
                <h3>Core Exercises:</h3>
                <img class = "exerPhoto" src="/images/Bicycle Crunch.JPG" />
                <a href="https://www.youtube.com/watch?v=1we3bh9uhqY" target="_blank">Bicycle Crunch</a>
                <img class = "exerPhoto" src="/images/Crucnhes.JPG" />
                <a href="https://www.youtube.com/watch?v=MKmrqcoCZ-M" target="_blank">Crucnhes</a>
                <img class = "exerPhoto" src="/images/Forearm Plank.JPG" />
                <a href="https://www.youtube.com/watch?v=pSHjTRCQxIw" target="_blank">Forearm Plank</a>
                <img class = "exerPhoto" src="/images/Leg Raises.JPG" />
                <a href="https://www.youtube.com/watch?v=l4kQd9eWclE" target="_blank">Leg Raises</a>
                <img class = "exerPhoto" src="/images/Mountain Climber.JPG" />
                <a href="https://www.youtube.com/watch?v=De3Gl-nC7IQ" target="_blank">Mountain Climber</a>
                <img class = "exerPhoto" src="/images/Russian Twist.JPG" />
                <a href="https://www.youtube.com/watch?v=NeAtimSCxsY" target="_blank">Russian Twist</a>
            </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Exercise;
