import React, { useState } from 'react';
import Header from '../components/Header';
import Footer, { Footer2 } from '../components/Footer';
import Person from '../components/Person';
import Example from '../components/Example';
import Button from '../components/button/Button';
import Dz1 from '../components/dz1/Dz1';
import Modal from '../components/modal/Modal';
import Count from '../components/count/Count';
import Input from '../components/input/Input';
import List from '../components/list/List';
import TodoList from '../components/TodoList/TodoList';
import TodoPage from './TodoPage';

const Main = () => {
    // const error = inputValue.length>5
    return (
        <div>
            <TodoPage/>
            {/*<List list={todoList}/>*/}
            {/*<h1 style={{color: error && "red"}}>то что написано в инпуте ={inputValue}</h1>*/}
            {/*<Input onChange={handleChange}/>*/}
            {/*<Count/>*/}
            {/*<Input/>*/}

            {/*<Button title={'SAVE'}/>*/}
            {/*<Button title={'EDIT'}/>*/}
            {/*<Button title={'Cancel'}/>*/}
            {/*<Button title={'DELETE'}/>*/}
            {/*<Dz1 title={'DZ1'}/>*/}
            {/*<Header/>*/}
            {/*<h1>Main</h1>*/}
            {/*<Footer/>*/}
            {/*<Footer2/>*/}
            {/*<Person name={'Bakyt'} age={18} email={"bak@mail.ru"}/>*/}
            {/*<Person name={'Kuban'} age={28} email={"bkub@mail.ru"}/>*/}
            {/*<Example name={'Kuban'} email={'b@mail.ru'}>*/}
            {/*    <p style={{color: "red", fontSize: 20}}>title <span style={{color: "blue"}}>Bakyt</span></p>:*/}
            {/*    <p>age</p>: 18*/}
            {/*</Example>*/}
        </div>
    );
};
export default Main;