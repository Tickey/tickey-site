import React, {Component, PropTypes} from 'react';
import classes from './Step.scss';

class Step extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, title, imgSource} = this.props;

        return (
            <div className={classes['steps-wrapper']}>
                <p>{name}</p>
                <h1 className={classes['green-hightlight']}>{title}</h1>
                <div className={classes['step-info']}>
                    {this.props.children}
                </div>
                <div className={classes.phone}>
                    <img src={imgSource} alt=""/>
                </div>
            </div>
        );
    }
}

export default Step;
