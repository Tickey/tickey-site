import React, {Component, PropTypes} from 'react';
import classes from './Stores.scss';


class Stores extends Component {
    render() {
        return (
            <div className={`${classes.stores}`}>
                <a href="" className={`${classes['play-store']}`}/>
                <a href="" className={`${classes['app-store']}`}/>
            </div>
        );
    }
}

export default Stores;
