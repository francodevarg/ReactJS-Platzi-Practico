import React from 'react';

class HolaMundo extends React.Component {
    render() {
        const Hello = 'Hola';
        const isTrue = true;
        return (
            <div>
                <h1 className='display-1'> This is It</h1>
                <h1>{Hello}</h1>
                <img
                    src='https://arepa.s3.amazonaws.com/react.png'
                    alt=''
                />
                {isTrue ? (
                    <h4>Esto es verdadero</h4>
                ) : (
                    <h4>Soy Falso</h4>
                )}

                {isTrue && <h4> Soy verdadero </h4>}
            </div>
        );
    }
}

export default HolaMundo;
