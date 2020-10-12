import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  
  state = { userName : 'Soni'}

  userNameChangeHandler = (event) =>{
    this.setState( {userName : event.target.value });

  }
  
  
  render() {
    return (
      <div className="App">
       <UserOutput para1='when are you coming to meet me ?IS everything good at home'/>
       <UserOutput username ={ this.state.userName }/>  
       <UserInput onChange ={this.userNameChangeHandler} currentUser={this.state.userName}></UserInput>
      </div>
    );
  }
}

export default App;
