import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import Pagination from "../components/pagintaion/Pagination";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/';



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

    // const setItem = () => {
    //     localStorage.setItem('name', 'Bakyt')
    //     localStorage.setItem('todo',  JSON.stringify({
    //         id: 3,
    //         title: 'sleep',
    //         completed: false
    //     }))
    // }
    //
    // const getItem = (name) => {
    //     return localStorage.getItem(name)
    // }

    // useEffect(() => {
    //     setItem()
    //     console.log('setItem');
    //     console.log(JSON.parse(getItem('todo')));
    // }, []);

    // useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('todo'))
    //     if (myLocalStorage === null) {
    //         return localStorage.setItem('todo', JSON.stringify(todoList))
    //     }
    //     if (myLocalStorage !== 0) {
    //         setTodolist(myLocalStorage)
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('todo', JSON.stringify(todoList))
    // }, [todoList]);


    const [limit , setLimit] = useState(2)
    const [offset , setOffset] = useState(0);
    const page = (offset / limit) + 1;
    const handlePrev = () => {
        setOffset(prevState => prevState - limit);
    }

    const handleNext = () => {
        setOffset(prevState => prevState + limit);
    }

    const getApi = async (API) => {
        const res = await fetch(`${BASE_URL}${API}?_limit=${limit}&_start=${offset}`);
        const data = await res.json();
        console.log(data)
        return data;
    }
    useEffect(() => {
        getApi('todos').then(todos => setTodolist(todos))
    }, [limit, offset]);


    return (
        <div>
            <input
                type="number"
                value={limit}
                onChange={e => setLimit(Number(e.target.value))}
            />
            <Button title={'Open'} action={handleShow}/>
            <Pagination page={page} prev={handlePrev} next={handleNext}/>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}/>
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