import React, {Component} from 'react';
import classes from './styles/Input.scss';

export default class Textarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea
                ref="textarea"
                name="textarea"
                placeholder={this.props.placeholder}
                className={classes.input}>
            </textarea>
        );
    }
}
