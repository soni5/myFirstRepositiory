import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
 state = {
           textLenght : 0,
           text : '',
          
 }

  textChangeHandler = (event) =>{
    const enteredText = event.target.value;
    const len = enteredText.length;
    this.setState(
        {textLenght : len , text : enteredText },
       );
  }

  deleteCharsHandler = (index) => {
    const textarr = this.state.text.split('');
    textarr.splice(index,1);
    const updatedText = textarr.join('');
    this.setState({
      textLenght : updatedText.length ,text : updatedText});

  }
  render() {
    let charList = this.state.text.split('').map( (ch,index) => {
      return <CharComponent 
      char={ch}
      key ={index}
      clicked={() => this.deleteCharsHandler(index)}
      />;
    }) ;
    

    return (
    <div className="App">
        <input type='text' onChange= {this.textChangeHandler} value ={this.state.text}></input>
        <p>Length of the Entered text is : {this.state.textLenght}</p>
        <Validation textLenght= {this.state.textLenght} />
        {charList}
      </div>
    );
  }
}

export default App;
