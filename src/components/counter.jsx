import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['Shin Nana', 'Yui Hanato', 'Ohara']
    }



    render() { 
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
        
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
