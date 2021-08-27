import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login(){
    const {login, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="email" ref={login}/>
                <input type="password" placeholder="password" ref={login}/>
                <input type="submit" />
            </form>
        </div>
    )
}