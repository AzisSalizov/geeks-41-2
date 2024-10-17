import React from 'react';
import classes from './button.module.scss'

const Button = ({title, action, color='primary'}) => {
    return (
        <button className={`${classes.btn} ${classes[color]}`} onClick={action}
        >{title}</button>
    );
};

export default Button;

const user= {
    name: "Bakyt",
    age: 18
}