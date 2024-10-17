import React from 'react';
import classes from './Modal.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';


const Modal = ({handleShow, handleChange, handleAdd}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <Button title={'Закрыть'} action={handleShow} color={'secondary'}/>
                <Input onChange={handleChange}/>
                <Button title={'ADD'} action={handleAdd}/>
            </div>
        </div>
    );
};

export default Modal;