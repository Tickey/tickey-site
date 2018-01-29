import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import Panel from 'react-bootstrap/lib/Panel';
import {IndexLink} from 'react-router';
import classes from './Footer.scss';
import Stores from '../reusable/Stores/Stores';


export default class Footer extends Component {

    render() {
        return (
            <footer className={`${classes.footer} clearfix container wrapper`}>
                <div className={classes.logo}/>
                <div className={`${classes['campaing-cities']} centered mt-20 mb-20`}>
                    <IndexLink to="/sofia" className="base-link gray-text">София</IndexLink>
                </div>
                <div className={classes['socials-wrapper']}>
                    <div className={`${classes.socials} d-table`}>
                        <a href="" className={`${classes.twitter} d-cell`}/>
                        <a href="" className={`${classes.instagram} d-cell`}/>
                        <a href="" className={`${classes.facebook} d-cell`}/>
                    </div>
                </div>
                <div className={classes['footer-stores-wrapper']}>
                    <Stores/>
                </div>
            </footer>
        );
    }
}
