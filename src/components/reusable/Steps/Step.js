import React, {Component, PropTypes} from 'react';
import classes from './Step.scss';

class Step extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, title, imgSource} = this.props;

        return (
            <div className={`${classes['steps-wrapper']} mb-10`}>
                <p className={`${classes['step-name']} text-14 uppercase left-align wrapper`}>{name}</p>
                <h5 className={`h5 centered uppercase wrapper`}>{title}</h5>
                <div className={`${classes['step-info']} wrapper`}>
                    {this.props.children}
                </div>
                <div className={`${classes.phone} wrapper`}>
                    <img src={imgSource} alt=""/>
                </div>
            </div>
        );
    }
}

export default Step;
