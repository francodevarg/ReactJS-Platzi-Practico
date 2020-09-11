import React from 'react';

class Button extends React.Component {
    //It is not props, diferent
    state = {
        count: 0,
    };

    //Event of the class
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        let { count } = this.state;

        return (
            <div>
                <h1>
                    Manzanas : <span> {count} </span>
                </h1>
                <button
                    type='button'
                    onClick={this.handleClick}
                >
                    Click
                </button>
            </div>
        );
    }
}
export default Button;
