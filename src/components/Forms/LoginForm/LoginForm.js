import React, {Component} from 'react';
import {reduxForm, Field, propTypes} from 'redux-form';
import loginValidation from './loginValidation';

@reduxForm({
    form: 'login',
    validate: loginValidation
})
export default class LoginForm extends Component {
    static propTypes = {
        ...propTypes
    }

    renderInput = ({input, label, type, meta: {touched, error}}) =>
        <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} type={type} className="form-control"/>
            {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
            {error && touched && <div className="text-danger"><strong>{error}</strong></div>}
        </div>;

    render() {
        const {handleSubmit, error} = this.props;

        return (
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <Field name="email" type="text" component={this.renderInput} label="Email *"/>
                {error && <p className="text-danger"><strong>{error}</strong></p>}
                <button className="btn btn-primary" type="submit">
                    <i className="fa fa-sign-in"/>{' '}Вход
                </button>
            </form>
        );
    }
}
