import React, { Component } from 'react';
import './tasks.css';
import Check from './check.png';
import Checkok from './check-ok.png';
import classNames from 'classnames';
class Task extends Component{
    constructor(props){
        super(props)
        this.state={
            tick: 1
        }
        this.tickf=this.tickf.bind(this);
        this.tickfok=this.tickfok.bind(this);
    }

        tickfok(){
           
             this.setState({tick:1});
        
             

        }
        tickf(){
             this.setState({tick:0});
             
        }
    
    render(){
        return <div className="containerTask">
            <img alt="" 
                onClick={this.tickf} 
                className={
                    classNames('not',{
                        check: this.state.tick === 1
                    })} 
                src= {Check}
                />
            <img alt="" 
                 onClick={this.tickfok} 
                 className={classNames('not' ,{
                    checkok: this.state.tick === 0
                     })} 
                 src= {Checkok}/>
        <div className={classNames('text',{
            textthought: this.state.tick === 0
                    })}>
                        {this.props.title}
                        </div>
        </div>
    }
}


export default Task;
