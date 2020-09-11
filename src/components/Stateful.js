import React, { Component } from 'react';

class Stateful extends Component {
    constructor(props) {
        super(props);
        this.props = {
            hola: 'Hola',
        };
        this.state = {
            hello: 'Hola Mundo!',
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.hello}</h1>
            </div>
        );
    }
}
export default Stateful;
