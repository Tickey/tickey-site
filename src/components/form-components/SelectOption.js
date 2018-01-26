import React from 'react';

export const SelectOption = (props) => (
    <option value={props.options.value}>{props.options.name}</option>
);

export default SelectOption
