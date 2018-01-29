import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Campaign from '../../components/Campaign/Campaign';

export default class Sofia extends Component {

    render() {
        return (
            <div className="container">
                <Campaign/>
            </div>
        );
    }
}
