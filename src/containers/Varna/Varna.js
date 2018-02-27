import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Campaign from '../../components/Campaign/Campaign';
import * as Scroll from 'react-scroll';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

export default class Sofia extends Component {
    constructor(props) {
        super(props);
        this.onDownloadClick = this.onDownloadClick.bind(this);
        this.writeUs = this.writeUs.bind(this);
    }

    onDownloadClick = () => {
        window.location.href = "https://tickey.me/downloadapp"
    }

    writeUs = () => {
        window.location.href = "mailto:support@tickey.me"
    }

    render() {
        return (
            <div className="container">
                <Campaign onDownloadClick={this.onDownloadClick} writeUs={this.writeUs} type="varna"/>
            </div>
        );
    }
}
