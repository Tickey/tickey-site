import React from 'react';
import classes from './styles/Select.scss';

export const Select = (props) => (
    <div className={classes.selectWrapper}>
        <label htmlFor={props.labelId} className={classes.label}>{props.labelText ? props.labelText : ""}</label>
        <select className={classes[props.type]} id={props.labelId}>
            <optgroup label={props.groupName ? props.groupName : ""}>
                {props.children}
            </optgroup>
        </select>
    </div>
);

export default Select
