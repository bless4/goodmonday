import React from 'react';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import 'antd/dist/antd.css';
import { Alert } from 'antd';

import { ButtonWidget, InputWidget, ResultWidget } from './widget';

const singleValues = [0,1];

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            arrayValue: '',
            resultArray: [],
            resultSum: 0,
            resultMultiArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleIntegerArray = this.handleIntegerArray.bind(this);
        this.handleFinalSum = this.handleFinalSum.bind(this);
        this.handlePairArrayToString = this.handlePairArrayToString.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleArrayValue(values) {
        for (var i = 0; i < values.length -1; i ++) {
            const one = values[i];
            const oneValue = parseInt(one) * parseInt(values[i + 1]);
            values.splice(0, 2, oneValue);
        }
        if (values.length === 1 ) {
            return parseInt(values[0]);
        } else {
            this.handleArrayValue(values);
        }
    }
    handleIntegerArray() {
        const { arrayValue } = this.state;
        if (arrayValue === '')
            return window.confirm("Value could not be empty");
        if (arrayValue.indexOf(',') === -1){
            this.setState({
                arrayValue: ''
            });
            return window.confirm("Parse Error!");
        } else {
            const splitArray = arrayValue.split(",");
            var index = 0;
            const arrayLength = splitArray.length;
            var tempArray = [];
            var multiValueArray = [];
            var chunk_size = 2;

            for (index = 0; index < arrayLength; index += chunk_size) {
                const nowValue = splitArray[index];
                if (parseInt(nowValue) !== 0 && !parseInt(nowValue)) {
                    this.setState({
                        arrayValue: ''
                    });
                    return window.confirm('Please input only number!');
                }
                if (singleValues.indexOf(parseInt(nowValue)) !== -1) chunk_size = 1;
                else chunk_size = 2;
                const myChunk = splitArray.slice(index, index+chunk_size);
                tempArray.push(myChunk);
            }
            this.setState({
                resultArray: this.handlePairArrayToString(tempArray)
            });
            const thirdTemp = tempArray;
            thirdTemp.forEach((one) => {
                const v = one;
                multiValueArray.push(this.handleArrayValue(v));
            });
            const totalSum = multiValueArray.reduce(this.handleFinalSum);
            this.setState({
                resultSum: totalSum,
                resultMultiArray: this.handlePairArrayToString(multiValueArray)
            });
        }
    }
    handleFinalSum(total, num) {
        return total + num;
    }
    handlePairArrayToString(array) {
        var resultString = '';
        array.forEach((sub) => {
            resultString += '('+ sub.toString() +'), ';
        });
        return resultString;
    }
    render() {
        return (
            <div className="view_body">
                <InputGroup>
                    <InputWidget name={'arrayValue'} onChange={this.handleChange} value={this.state.arrayValue} />
                    <InputGroupAddon addonType="append">
                        <ButtonWidget onClick={() => this.handleIntegerArray()} />
                    </InputGroupAddon>
                </InputGroup>
                <Alert 
                    message={
                        <ResultWidget  
                            resultArray={this.state.resultArray} 
                            resultMultiArray={this.state.resultMultiArray} 
                            resultSum={this.state.resultSum} 
                        />
                    } 
                    type="success" 
                />
            </div>
        )
    }
}