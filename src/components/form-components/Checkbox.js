import React, { Component } from 'react';
import classes from './styles/Checkbox.scss';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iAgree: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({
            iAgree: !this.state.iAgree
        }, ()=> {
            this.props.onClick(e);
        });
    }

    render() {
        return (
            <label className={classes.switch} >
                <input ref="checkbox" type="checkbox" className={classes.input} checked={this.state.iAgree}/>
                <div className={classes.slider} onClick={this.onClick}></div>
            </label>
        );
    }
}
