import React, {Component, PropTypes} from 'react';
import classes from './Stores.scss';


class Stores extends Component {
    render() {
        return (
            <div className={`${classes.stores} clearfix`}>
                <a href="https://play.google.com/store/apps/details?id=me.tickey.passanger" target="_blank" className={`${classes['play-store']}`}/>
                <a href="https://itunes.apple.com/bg/app/tickey/id1035127542?mt=8" target="_blank" className={`${classes['app-store']}`}/>
            </div>
        );
    }
}

export default Stores;
