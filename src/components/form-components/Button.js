import React, {Component} from 'react';
import classes from './styles/Button.scss';

export default class Button extends Component {

    render() {
        return (
            <button className={`${classes[this.props.type]} ${classes[this.props.addedClass]} ${classes.button}`} onClick={this.props.onClick} type={this.props.functionType}>
                {this.props.label}
            </button>
        );
    }
}
