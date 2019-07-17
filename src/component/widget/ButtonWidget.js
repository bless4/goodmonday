import React from 'react';
import { Button } from 'reactstrap';

export default class ButtonWidget extends React.Component {
    render() {
        const { props } = this;
        return(
            <Button color="success" onClick={props.onClick}>Get Result</Button>
        );
    }
}