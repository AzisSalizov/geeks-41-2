import React from 'react';
import classes from './button.module.scss'

const Button = ({title}) => {
    return (
        <button className={classes.btn}>{title}</button>
    );
};

export default Button;