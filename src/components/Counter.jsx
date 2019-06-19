import React, {Component} from 'react';
class Counter extends Component {
    render(){
        const {counter, increment, decrement, reset} = this.props;
        return(
            <div className="counter">
                <h1>Count: <strong>{counter}</strong></h1>
                <div className="counter-item">
                    <button className="btn btn-dark" onClick = {increment}>Increment +1</button>
                </div>
                <div className="counter-item">
                    <button className="btn btn-dark" onClick = {decrement}>Decrement -1</button>
                </div>
                <div className="counter-item">
                    <button className="btn btn-dark" onClick = {reset}>Reset</button>
                </div>
            </div>
        );
    }
    
}

export default Counter
