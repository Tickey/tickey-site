import React, {Component, PropTypes} from 'react';
import classes from './Modal.scss';

class Modal extends Component {
    render() {
        const {title, submitBtnText, onCloseClick} = this.props;
        return (
            <div className={classes.modal}>
                <div className={classes['overlay']} onClick={onCloseClick}/>
                <div className={classes['modal-content']}>
                    <div className={classes.close} onClick={onCloseClick}/>
                    <h3 className={classes.title}>{title ? title : "Modal Title"}</h3>
                    {this.props.children}
                    {/*<button>{submitBtnText ? submitBtnText : "Submit"}</button>*/}
                </div>
            </div>
        );
    }
}

export default Modal;