import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import './index.css'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

interface Form {
    userName: String,
    password: String,
}

const Login = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("")

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        setName(target.value)
    }

    const handleSubmit = () => {
        navigate("/home", { state: { name } });
    }

    const redirectToForgotPassword = () => {
        navigate("/home", { state: { name } });
    }

    const loginForm = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: (values: Form) => {
            console.log('values', values)
        },
    });

    return (
        <div className='container-index'>
            <form onSubmit={loginForm.handleSubmit}>
                <h1>Bienvenido</h1>
                <Grid container spacing={1}>
                    <Grid item md={5} xs={12} className={'label-input'}>
                        <p>Nombre de usuario</p>
                    </Grid>
                    <Grid item md={7} xs={12} className={'align-center'}>
                        <TextField
                            id="userName"
                            name="userName"
                            autoComplete='off'
                            size='small'
                            variant="outlined"
                            className='input-name'
                            onChange={loginForm.handleChange}
                            value={loginForm.values.userName}
                        />
                    </Grid>
                    <Grid item md={5} xs={12} className={'label-input'}>
                        <p>Contraseña</p>
                    </Grid>
                    <Grid item md={7} xs={12} className={'align-center'}>
                        <TextField
                            id="password"
                            name="password"
                            autoComplete='off'
                            size='small'
                            type={'password'}
                            variant="outlined"
                            className='input-name'
                            onChange={loginForm.handleChange}
                            value={loginForm.values.password}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} className={'align-center'}>
                        <div className='forgot-password' onClick={() => redirectToForgotPassword()}>¿Olvidaste tu contraseña?</div>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <div className='button-bar'><Button
                            variant='contained'
                            className='button-next'
                            type='submit'
                        >
                            Siguiente
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login;
