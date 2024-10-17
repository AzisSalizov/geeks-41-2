import React from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';


const Todo = ({ todo, handleDone, handleDelete }) => {
    return (
        <li className={classes.li}>
            <div className={classes.info}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <p>{todo.completed ? 'true' : 'false'}</p>
            </div>
            <div className={classes.btns}>
                <Button title={'Edit'} action={() => {
                }}/>
                <Button title={'Done'} color={'Secondary'} action={() => handleDone(todo.id)}/>
                <Button title={'Delete'} color={'error'} action={() => handleDelete(todo.id)}/>
            </div>
        </li>
    );
};

export default Todo;