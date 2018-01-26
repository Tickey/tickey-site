import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {LoginForm} from 'components/Forms';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import {Questions} from  '../../components';

@connect(
    state => ({user: state.auth.user}),
    {...notifActions, ...authActions})

export default class Home extends Component {
    static propTypes = {
        user: PropTypes.object,
        login: PropTypes.func.isRequired,
        notifSend: PropTypes.func.isRequired
    }

    static defaultProps = {
        user: null
    }

    static contextTypes = {
        router: PropTypes.object
    }

    login = data => this.props.login(data).then(this.successLogin);

    successLogin = data => {
        this.props.notifSend({
            message: 'Успешен вход!',
            kind: 'success',
            dismissAfter: 2000
        });
        return data;
    };

    render() {
        const {user} = this.props;
        return (
            <div className="container form-wrapper">

            </div>
        );
    }
}
