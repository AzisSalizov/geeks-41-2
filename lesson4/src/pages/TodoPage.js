import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';


const TodoPage = () => {
    const [show, setShow] = useState(false)
    const handleShow = ()=> {
        setShow(prevState => !prevState)
    }
    const [inputValue, setInputValue] = useState('')
    // console.log(inputValue);
    const handleChange= (event)=> {
        setInputValue(event.target.value)
    }

    const [todoList, setTodolist] = useState([])

    const handleAdd = () => {
        setTodolist(prev=> [...prev, {
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            title: inputValue,
            completed: false
        }])
        console.log(todoList);
    }

    const handleDone = (id) => {
        todoList.map(todo=>{
            if(id===todo.id) {
                return todo.completed=!todo.completed
            }
        })
        setTodolist([...todoList])
    }

    const handleDelete = (id) => {
        setTodolist(todoList.filter(todo=>todo.id !== id))
    }

    const handleEdit = (todoEdit) => {
        todoList.map(todo=>{
            if (todoEdit.id === todo.id) return todo.title=todoEdit.title
        })
        setTodolist([...todoList])
    }

    // useEffect(() => {
    //     console.log('useEffect');
    // },[show, todoList]);

    const setItem = () => {
        localStorage.setItem('name', 'Bakyt')
        localStorage.setItem('todo',  JSON.stringify({
            id: 3,
            title: 'sleep',
            completed: false
        }))
    }

    const getItem = (name) => {
        return localStorage.getItem(name)
    }

    // useEffect(() => {
    //     setItem()
    //     console.log('setItem');
    //     console.log(JSON.parse(getItem('todo')));
    // }, []);

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('todo'))
        if (myLocalStorage === null) {
            return localStorage.setItem('todo', JSON.stringify(todoList))
        }
        if (myLocalStorage !== 0) {
            setTodolist(myLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList))
    }, [todoList]);

    return (
        <div>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}/>
            <Button title={'Open'} action={handleShow}/>
            {
                show  &&
                <Modal
                    handleShow={handleShow}
                    handleChange={handleChange}
                    handleAdd={handleAdd}/>
            }
        </div>
    );
};

export default TodoPage;