import React, {Component} from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
// import { robots } from "./robots";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
// import ErrorBoundry from "./ErrorBoundry";

// const state = {
//     '
// }
class App extends Component{
    constructor(){
        super()
        this.state = 
        {
            robots: [],
            searchfield: ''
        }
    }
   
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
 
    }
    componentDidMount(){
        // 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users=>{
            this.setState({robots: users});
        })
    }
    render(){
        const filteredBots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log(filteredBots);
        return(
        <div className="tc col-2">
            <h1 className="head">RoboFriends</h1>
            
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredBots}/>
                        </ErrorBoundry>
                    
                    </Scroll>
                
            </div>
        
    )
    }    
}

export default App;

