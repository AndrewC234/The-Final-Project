import { Component } from "react";
import "./style.css"

class Blog extends Component{
    render(){
        return(
            <div>
            <div class="container-home">
            <div class="container1">
            <h2 class="blog title">Fortune Fitness Blog</h2>
            <div>Welcome to Fortune fitness's blog. If you are a work enthusiast, have questions about workouts, looking for a workout partner or trainer, or would just like to connect to fellow members you are in the right place.    </div>
            <br/>
            <div>
            {Posts}
            </div>
            </div>
            </div>
            </div> 
        )
    }
}
export default Blog