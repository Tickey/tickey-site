import React from 'react';
import classes from './styles/Card.scss';

export const Card = (props) => (
    <div className={classes.card}>
        <div className={classes.cardHeader}>
            {props.title}
        </div>
        <div className={classes.cardContent}>
            {props.children}
        </div>
    </div>
);

export default Card;
