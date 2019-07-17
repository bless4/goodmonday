import React from 'react';

export default class ResultWidget extends React.Component {
    render() {
        const { props } = this;
        return(
            <div>
                <p>Result Pair Array : {props.resultArray}</p>
                <p> Array Pair  Multiplication: {props.resultMultiArray}</p>
                <p>Total Sum : {props.resultSum}</p>
            </div>
        )
    }
}