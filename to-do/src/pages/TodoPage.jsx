import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/Button/Button';
import classes from './TodoPage.module.scss';
import db from '../db.json';

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem('todos')) || db.todos || []);
    const [isEditing, setIsEditing] = useState(null);

    const handleChange = (event) => setInputValue(event.target.value);

    const handleAdd = () => {
        const newId = (todoList.length > 0 ? Math.max(...todoList.map(todo => parseInt(todo.id))) + 1 : 1).toString();

        const newTodo = {
            id: newId,
            title: inputValue,
        };
        setTodoList(prev => {
            const updatedTodos = [...prev, newTodo];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
        setInputValue('');
    };

    const handleEdit = (id) => {
        setIsEditing(id);
    };

    const handleSave = (updatedTodo) => {
        setTodoList(prev => {
            const updatedTodos = prev.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
        setIsEditing(null);
    };

    const handleCancel = () => {
        setIsEditing(null);
    };

    const handleDelete = (id) => {
        setTodoList(prev => {
            const updatedTodos = prev.filter(todo => todo.id !== id);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    const handleClearAll = () => {
        setTodoList([]);
        localStorage.removeItem('todos');
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className={classes.todoPage}>
            <h1>TO DO</h1>
            <div className={classes.addContainer}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter a task"
                    className={classes.input}
                />
                <Button title="Add" onClick={handleAdd} />
                <Button title="Clear all" onClick={handleClearAll} />
            </div>
            <TodoList
                todoList={todoList}
                isEditing={isEditing}
                handleEdit={handleEdit}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default TodoPage;
