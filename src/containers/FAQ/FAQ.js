import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import AccordeonWrapper from '../../components/accordeon/AccordeonWrapper'
import questions from './questions';
import FaqQuestions from './FaqQuestion';
import classes from './Faq.scss';


export default class FAQ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`container wrapper-middle ${classes.faq}`}>
                <h1>Често задавани <strong>въпроси</strong></h1>
                <p className={classes['red-text']}>задай въпрос</p>
                {questions.map(item =>
                    <FaqQuestions
                        key={item.id}
                        item={item}
                    />)}
            </div>
        );
    }
}
