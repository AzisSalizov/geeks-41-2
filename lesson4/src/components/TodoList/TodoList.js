import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.scss';


const TodoList = ({todoList, handleDone, handleDelete,handleEdit}) => {
    const [currentId, setCurrentId] = useState(null)
    console.log(currentId,'currentId');
    return (
        <div className={classes.ul}>
            {
                todoList.map(todo=>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleDone={handleDone}
                        handleDelete={handleDelete}
                        setCurrentId={setCurrentId}
                        isEdit={currentId === todo.id}
                        handleEdit={handleEdit}
                    /> )
            }
        </div>
    );
};

export default TodoList;