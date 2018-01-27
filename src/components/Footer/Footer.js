import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import Panel from 'react-bootstrap/lib/Panel';
import {IndexLink} from 'react-router';
import classes from './Footer.scss';
import Stores from '../reusable/Stores/Stores';


export default class Footer extends Component {

    render() {
        return (
            <section className={`${classes.footer} clearfix main-side-space`}>
                <div className="logo">test</div>
                <div className="socials">
                    <span className="fb"></span>
                    <span className="insta"></span>
                    <span className="tw"></span>
                </div>
                <Stores/>
            </section>
        );
    }
}
