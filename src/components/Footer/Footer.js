import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import Panel from 'react-bootstrap/lib/Panel';
import {IndexLink} from 'react-router';
import classes from './Footer.scss';


export default class Footer extends Component {

    render() {
        return (
            <section className={`${classes.footer} clearfix main-side-space`}>
                <div className="logo"></div>
                <div className="socials">
                    <span className="fb"></span>
                    <span className="insta"></span>
                    <span className="tw"></span>
                </div>
                <div className="stores">
                    <div className="play-store"></div>
                    <div className="app-store"></div>
                </div>
            </section>
        );
    }
}
