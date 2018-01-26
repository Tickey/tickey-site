import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import Helmet from 'react-helmet';
import {Notifs} from 'components';
import {push} from 'react-router-redux';
import config from 'config';
import classes from './App.scss';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Panel from 'react-bootstrap/lib/Panel';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import {logout} from 'redux/modules/auth';
import * as authActions from 'redux/modules/auth';
import Footer from '../../components/Footer/Footer';


@connect(
    state => ({
        notifs: state.notifs,
        user: state.auth.user,
        token: state.auth.token,
        email: state.auth.email,
    }),
    {logout, pushState: push, ...authActions})

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired,
        user: PropTypes.object,
        notifs: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired
    };

    static defaultProps = {
        user: null
    };

    handleLogout = event => {
        event.preventDefault();
        this.props.logout();
    };

    render() {
        const {user, email, notifs, children} = this.props;
        return (
            <div className={classes.app}>
                <Helmet {...config.app.head} />
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/">
                                Test
                            </IndexLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav navbar pullRight>

                            <LinkContainer to="/test">
                                <NavItem>Test</NavItem>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

                <div className={classes.appContent}>
                    {notifs.global && <div className="container">
                        <Notifs
                            className={classes.notifs}
                            namespace="global"
                            NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
                        />
                    </div>}

                    {children}
                </div>

                <Footer/>
            </div>
        );
    }
}
