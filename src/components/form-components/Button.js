import React, { Component } from 'react';
import classes from './styles/Button.scss';

export default class Button extends Component {

    render() {
        return (
            <span className={classes[this.props.type]} onClick={this.props.onClick}>
                {this.props.label}
            </span>
        );
    }
}
