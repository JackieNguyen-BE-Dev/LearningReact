import React, { Component } from 'react';

class Counter extends Component {
    styles ={
        fontSize: 20,
        fondWeight: "bold",
        color: "red"
    };

    render() { 
        return (
            <div>
                {this.props.children}
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                
                <button onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btnsm m-2">Delete</button>
            </div>
        );
        
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;