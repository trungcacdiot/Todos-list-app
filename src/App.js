import React,{Component} from 'react';
import './App.css';
import Task from './component/tasks.js';
import Success from './success.png';
const arr = [];

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      T: arr
    }
    this.rder=this.rder.bind(this)
    
  }

rder(event){
  const b =[<Task title={event.target.value}/>];
  if(event.keyCode===13){
  arr.push(b)
  event.target.value='';
  return(
   this.setState({T: arr })
  )
}
}

  render(){
    return <div className="container">
      <p className="appName">Todos list</p> 
      <div className="checkInput">
        <img alt="" src={Success} className='check' />
        <input onKeyUp={this.rder} className="input"></input>
      </div>
      <div className="task">{this.state.T}</div>
    </div>
  }
}
  

export default App;
