import React from 'react';
import { Input } from 'reactstrap';
 
export default class InputWidget extends React.Component {
    render() {
        const { props } = this;
        return(
            <Input placeholder="ex: 1,2,3,4,5,6" name={props.name} onChange={props.onChange} value={props.value} />
        );
    }
}