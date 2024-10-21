import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classes from "./FormPage.module.scss";
import Button from "../../components/button/Button";

const schema = yup.object().shape({
    name: yup.string().min(3, 'Имя должно состоять не менее чем из 3 символов').required('Имя является обязательным'),
    email: yup.string().email('Неверный адрес электронной почты').required('Почта является обязательным'),
    password: yup.string().min(6, 'Пароль должен состоять не менее чем из 6 символов').required('Пароль является обязательным'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Пожалуйста, подтвердите свой пароль'),
});

const FormPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={classes.register_form}>
            <h2>Register with</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.form_group}>
                    <label>Name</label>
                    <input {...register('name')} placeholder="Your full name"/>
                    {errors.name && <p className={classes.error}>{errors.name.message}</p>}
                </div>

                <div className={classes.form_group}>
                    <label>Email</label>
                    <input {...register('email')} placeholder="Your email"/>
                    {errors.email && <p className={classes.error}>{errors.email.message}</p>}
                </div>

                <div className={classes.form_group}>
                    <label>Password</label>
                    <input type="password" {...register('password')} placeholder="Your password"/>
                    {errors.password && <p className={classes.error}>{errors.password.message}</p>}
                </div>

                <div className={classes.form_group}>
                    <label>Re-enter password</label>
                    <input type="password" {...register('confirmPassword')} placeholder="Your password"/>
                    {errors.confirmPassword && <p className={classes.error}>{errors.confirmPassword.message}</p>}
                </div>

                <Button type="submit" className={classes.submit_btn} title={'Continue'}/>
            </form>
        </div>
    );
};

export default FormPage;
