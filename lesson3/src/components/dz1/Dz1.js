import React from 'react';
import classes from './dz1.module.scss'

const Dz1 = ({title}) => {
    return (
        <>
            <div>
                <div className={classes.title}>Title</div>
            </div>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Title: {title}</h1>
            </div>
        </>
    );
};

export default Dz1;