import React from 'react';
import classes from "./user.module.scss";
import Button from "../button/Button";

const User = ({user, getApiUser, userOne}) => {
    console.log(userOne)
    return (
        <div className={classes.user}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <Button title={'Подробнее'} action={() => {
                getApiUser('users', user.id)
            }}/>
        </div>
    );
};

export default User;