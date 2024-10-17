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

const Main = () => {
    const [show, setShow] = useState(false)
    const handleShow = ()=> {
        setShow(prevState => !prevState)
    }
    const [input, setInput] = useState('')
    console.log(input);
    const handleChange= (event)=> {
        setInput(event.target.value)
    }

    const error = input.length>5
    return (
        <div>
            <h1 style={{color: error && "red"}}>то что написано в инпуте ={input}</h1>
            <Input onChange={handleChange}/>
            {/*<Count/>*/}
            {/*<Input/>*/}
            <button onClick={handleShow}>Open</button>
            {/*{*/}
            {/*    show  &&*/}
            {/*        <Modal handleShow={handleShow}>*/}
            {/*            <h1>MOdal</h1>*/}
            {/*        </Modal>*/}
            {/*}*/}
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