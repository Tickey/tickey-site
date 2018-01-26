import React from 'react';
import classes from './styles/FilterWidget.scss';

export const FilterWidget = (props) => (
    <div className={classes.card} >
      <div className={classes.cardHeader}>
          {props.title}
        </div>
        <div className={classes.cardContent}>
          {props.children}
      </div>
    </div>
);

export default FilterWidget;
