import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        value: this.props.value,
        //TO DO
        //It will make the mistake hare
        //Curently, I do not detect the fault
        // Maybe I will come back later
    }

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    };

    styles ={
        fontSize: 20,
        fondWeight: "bold",
        color: "red"
    };

    handleIncrement() {
        this.setState({ value: this.state.count + 1});
    };

    render() { 
        console.log("props",this.props)

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