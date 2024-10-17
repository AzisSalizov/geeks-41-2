import React from 'react';
import Header from '../components/Header';
import Footer, { Footer2 } from '../components/Footer';
import Person from '../components/Person';

const Main = () => {
    return (
        <div>
            <Header/>
            <h1>Main</h1>
            <Footer/>
            <Footer2/>
            <Person name={'Bakyt'} age={18} email={"bak@mail.ru"}/>
            <Person name={'Kuban'} age={28} email={"bkub@mail.ru"}/>
        </div>
    );
};
export default Main;