import React, {useEffect, useState} from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';

export const BASE_URL = 'http://localhost:5000/todos';


const TodoPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(prevState => !prevState);
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodolist] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchTodos = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setTodolist(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleAdd = async () => {
        const newId = todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;

        const newTodo = {
            id: String(newId),
            title: inputValue,
            completed: false,
        };

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });

            const addedTodo = await response.json();
            setTodolist(prev => [...prev, addedTodo]);
            setInputValue(''); // Очистка поля ввода
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };



    const handleDone = async (id, completed) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({completed: !completed}),
            });

            if (response.ok) {
                setTodolist(prev =>
                    prev.map(todo => (todo.id === id ? {...todo, completed: !completed} : todo))
                );
            }
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleEdit = async (todoEdit) => {
        try {
            const response = await fetch(`${BASE_URL}/${todoEdit.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title: todoEdit.title}),
            });

            if (response.ok) {
                setTodolist(prev => prev.map(todo => (todo.id === todoEdit.id ? todoEdit : todo)));
            }
        } catch (error) {
            console.error('Error editing todo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTodolist(prev => prev.filter(todo => todo.id !== id));
            }
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <Button title={'Open'} action={handleShow}/>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleChange={handleChange}
                    handleAdd={handleAdd}
                />
            }
        </div>
    );
};

export default TodoPage;
