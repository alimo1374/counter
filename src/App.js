import React from 'react';
import './App.css';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this);
        this.decrement= this.decrement.bind(this);
        this.reset= this.reset.bind(this);
        this.state={
            counter : 0 
        }
    }
    increment(){
        this.setState((prev)=>{
            return{
                counter: prev.counter +1
            }
        })
    }
    
    decrement(){
        this.setState((prev)=>{
            return{
                counter: prev.counter - 1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return{
                counter: 0
            }
        })
    }
    
    render(){
        return(
            <div className="App">
            <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>reset</button>

            </div>
        );
    }
}