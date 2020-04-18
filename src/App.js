import React from 'react';
import "./App.css";
import Card from "./Card.js";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {randomUser : [], limit : ""};
    this.getLimit = this.getLimit.bind(this);
  }

  getRandomUserData = async () => {
    const {limit} = this.state;
    let result = await fetch(`https://api.randomuser.me/?=US&results=${limit ? limit : 5}`);
    result = await result.json();
    console.log(result)
    this.setState({randomUser : result.results})
  }

 
  getLimit(evt) {
    console.log(evt.target.value)
    this.setState({limit : evt.target.value})
  }
  
  
  componentDidMount() {
    this.getRandomUserData();
  }

  render() {

    const {randomUser, limit} = this.state

    return (
      <div className="container">
          <button type="button" onClick={this.getRandomUserData}>Get random user</button>  
          <div>    
          Input Number<input type="text" value={limit} onChange={this.getLimit}/> 
          <div className="row d-flex justify-content-around">
          {randomUser.map((user ,idx)=> (
            <Card key={idx} user={user} />
          ))}
          </div>
          </div>
      </div>)
    
  }
}


 export default App;