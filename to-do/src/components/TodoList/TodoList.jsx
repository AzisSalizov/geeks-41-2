import React, { useState } from 'react';
import classes from './TodoList.module.scss';
import Button from '../Button/Button';

const TodoList = ({ todoList, isEditing, handleEdit, handleSave, handleCancel, handleDelete }) => {
    const [editableTitle, setEditableTitle] = useState('');

    const handleTitleChange = (e) => {
        setEditableTitle(e.target.value);
    };

    return (
        <ul className={classes.todoList}>
            {todoList.map(todo => (
                <li key={todo.id} className={classes.todoItem}>
                    {isEditing === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editableTitle}
                                onChange={handleTitleChange}
                                className={classes .todoInput}
                            />
                            <Button title="Save" onClick={() => handleSave({ ...todo, title: editableTitle })} />
                            <Button title="Cancel" onClick={handleCancel} />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={todo.title}
                                readOnly={!todo.editable}
                                onChange={(e) => handleEdit({...todo, title: e.target.value})}
                                className={`${classes.todoInput} ${todo.editable ? classes.editable : ''}`}
                            />
                            <Button title="✏️" onClick={() => {
                                handleEdit(todo.id);
                                setEditableTitle(todo.title);
                            }}/>
                            <Button title="🗑️" onClick={() => handleDelete(todo.id)}/>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
