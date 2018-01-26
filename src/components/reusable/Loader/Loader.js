import React, {Component, PropTypes} from 'react';
import classes from './Loader.scss';


class Loader extends Component {
    render() {
        return (
            <div className={classes.loader}/>
        );
    }
}

export default Loader;
