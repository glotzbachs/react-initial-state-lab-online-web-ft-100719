// your Bomb code here!
import React, { Component } from 'react';

export class Bomb extends Component {

    constructor(props){
        super()
        this.state = { secondsLeft: props.initialCount }
    }

    render() {
        let text 
        if (this.state.secondsLeft === 0) {
            text = 'Boom!'
        } else {
            text = `${this.state.secondsLeft} seconds left before I go boom!`
        }

        return (
            <div>
               {text}
            </div>
        );
    }
}

export default Bomb;
