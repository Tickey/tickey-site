import React, {Component, PropTypes} from 'react';
import classes from './Stores.scss';


class Stores extends Component {
    render() {
        return (
            <div className={classes.stores}>
                <div className="play-store"></div>
                <div className="app-store"></div>
            </div>
        );
    }
}

export default Stores;
