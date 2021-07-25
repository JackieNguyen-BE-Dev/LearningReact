import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        value: this.props.counter.value,
        //TO DO
        //It will make the mistake hare
        //Curently, I do not detect the fault
        // Maybe I will come back later
    }

    styles ={
        fontSize: 20,
        fondWeight: "bold",
        color: "red"
    };

    handleIncrement = () => {
        console.log("Jackie", this.props.counter)
        this.setState({ value: this.state.value + 1});
    };

    render() { 
        return (
            <div>
                {this.props.children}
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                
                <button onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btnsm m-2">Delete</button>
            </div>
        );
        
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;