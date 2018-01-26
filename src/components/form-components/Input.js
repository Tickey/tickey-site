import React, { Component } from 'react';
import classes from './styles/Input.scss';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                ref="input"
                type="text"
                placeholder={this.props.placeholder}
                className={classes.input}
                onKeyUp={this.props.onKeyUp}/>
        );
    }
}
