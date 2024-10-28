import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/Button/Button';
import classes from './TodoPage.module.scss';

export const BASE_URL = 'http://localhost:5000/todos';

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    const handleChange = (event) => setInputValue(event.target.value);

    const fetchTodos = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setTodoList(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleAdd = async () => {
        const newId = (todoList.length > 0 ? Math.max(...todoList.map(todo => parseInt(todo.id))) + 1 : 1).toString();

        const newTodo = {
            id: newId,
            title: inputValue,
        };
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo),
            });
            const addedTodo = await response.json();
            setTodoList(prev => [...prev, addedTodo]);
            setInputValue('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleEdit = (id) => {
        setIsEditing(id);
    };

    const handleSave = async (updatedTodo) => {
        try {
            await fetch(`${BASE_URL}/${updatedTodo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: updatedTodo.title }),
            });
            setTodoList(prev =>
                prev.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))
            );
            setIsEditing(null);
        } catch (error) {
            console.error('Error saving todo:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(null);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
            setTodoList(prev => prev.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleClearAll = async () => {
        try {
            for (let todo of todoList) {
                await fetch(`${BASE_URL}/${todo.id}`, { method: 'DELETE' });
            }
            setTodoList([]);
        } catch (error) {
            console.error('Error clearing todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

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
