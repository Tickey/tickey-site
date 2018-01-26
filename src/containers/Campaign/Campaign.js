import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {SecondNav} from '../../components/reusable/';
import {MainSlogan} from '../../components';

export default class Campaign extends Component {

    render() {
        return (
            <div className="container form-wrapper">
                <SecondNav/>
                <MainSlogan/>
            </div>
        );
    }
}
