import React from 'react';
import logo from './logo.svg';
import './App.css';

class Whether extends React.Component{
  constructor(props){
    super(props);
    this.state={
      whetherArr:[
        'sunday',
        'Monday',
        'Tuesday',
        "wednesday",
        'Thursday',
        'Friday',
        'saturday'
      ]
      
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState={
      value:this.state.whetherArr
    }
  }

  onClick=()=>{
    const days=this.state.whetherArr.map(days=()=>{
    if(days===sunday){
      this.setState={
        days:"sunday temprature=36c"
      }
    }
    
    else if(days===monday){
      this.setState={
        monday:"monday temperture 47C"
      }
    }
    })
  }

  whetherForSunday(){
    
  }

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Enter the Address name'
        onClick={this.onClick}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
}

export default Whether;
