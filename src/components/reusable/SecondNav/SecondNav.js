import React, {Component, PropTypes} from 'react';
import classes from './SecondNav.scss';
import {Button} from '../../form-components';


class SecondNav extends Component {
    render() {
        return (
            <div className={classes['second-nav']}>
                <Button type="green" label="Изтегли" addedClass="small-text"/>
            </div>
        );
    }
}

export default SecondNav;
