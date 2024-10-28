import React from 'react';
import classes from './Button.module.scss';

const Button = ({ title, onClick, disabled }) => {
    return (
        <button
            className={`${classes.button} ${disabled ? classes.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;
