import React, {Component, PropTypes} from 'react';
import classes from './SecondNav.scss';
import {Button} from '../../form-components';


class SecondNav extends Component {

    render() {
        const {onDownloadClick} = this.props;
        return (
            <div className={classes['second-nav']}>
                <div className={classes['left-side']}>
                    <span className={classes.dots}/>
                    <span className={classes.network}/>
                    <span className={classes.bluetooth}/>
                </div>
                <div className={classes['right-side']}>
                    <span className={classes.text}>BG</span>
                    <Button type="green" label="Изтегли" addedClass="small-text" onClick={onDownloadClick}/>
                </div>

            </div>
        );
    }
}

export default SecondNav;
