import React from 'react';
import classes from './Modal.module.scss';


const Modal = ({children, handleShow}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <button onClick={handleShow}>Закрыть</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;