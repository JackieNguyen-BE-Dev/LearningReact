import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
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

    handleIncrement(id) {
        console.log(id);
        this.setState({ count: this.state.count + 1});
    };

    /*
    *throught another helper func like my event handler
    doHandleIncrement = () => {
        this.handleIncrement({id : 2});
    }

    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
        
    }
    */

    // Inline 
    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({id: 1}) } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
        
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;