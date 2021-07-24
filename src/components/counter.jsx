import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
    }

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    styles ={
        fontSize: 20,
        fondWeight: "bold",
        color: "red"
    }

    handleIncrement(){
        console.log("Jackie is here", this);

    }

    /*
    //----- Other way not using constructor
    handleIncrement = () => {
        console.log("Jackie is here", this);
    }
    */
   
    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
        
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;