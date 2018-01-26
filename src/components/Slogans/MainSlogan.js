import React, {Component, PropTypes} from 'react';
import classes from './MainSlogan.scss';


class MainSlogan extends Component {
    render() {
        return (
            <div className={classes['main-slogan']}>
                <div className={classes.name}/>
                <h1 className="centered">ПЛАТИ БИЛЕТА<br/>
                    <span className={classes['yellow-highlight']}>В СОФИЯ</span><br/>
                    <span className={classes['thinner']}>през смартфона</span>
                </h1>
            </div>
        );
    }
}

export default MainSlogan;
