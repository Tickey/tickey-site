import React, {Component, PropTypes} from 'react';
import classes from './Faq.scss';

class FaqQuestion extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            active: false
        };
    }

    onClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const {item} = this.props;
        const activeItem = this.state.active;
        return (
            <div className={`${classes.accordion} ${item.key === 1 ? classes.first : ''} ${activeItem ? classes.active : ''}`}>
                <button className={`${classes['accordion-btn']} tap-highlight`} onClick={this.onClick}>
                    <h4 className={`${classes['accordion-title']} heading-18-22 gray-text`}>{item.title}</h4>
                </button>
                <div className={`${classes['accordion-text']} heading-15-18 gray-text`}>{item.text}</div>
            </div>
        );
    }
}

FaqQuestion.propTypes = {
    item: PropTypes.object.isRequired
};

export default FaqQuestion;
