import React from 'react';
import classes from './button.module.scss';

const Button = ({title, action, color = 'primary', className, disabled}) => {
    return (
        <button
            className={`${classes.btn} ${classes[color]} ${className || ''}`}
            onClick={action}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;
