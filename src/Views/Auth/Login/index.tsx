import { useContext, useState } from 'react';
import './index.css'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { LoginSchema } from '../../../Validations/LoginSchema';
import { validateLogin } from '../../../Utils/CheckLogin';
import { AuthContext } from '../../../Context/AuthContext';

interface Form {
    userName: String,
    password: String,
}

const Login = () => {

    const userContext = useContext(AuthContext)

    let navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState(false)

    const handleSubmit = (user: any) => {
        userContext.signin(user, () => { })
        navigate("/home");
    }

    const handleError = () => {
        setErrorLogin(true)
        loginForm.resetForm();

    }

    const redirectToForgotPassword = () => {
        navigate("/recover");
    }

    const redirectToCreateUser = () => {
        navigate("/register");
    }

    const loginForm = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values: Form) => {
            const { result, user } = validateLogin(values)
            if (result) {
                handleSubmit(user)
            } else {
                handleError()
            }
        },
    });

    return (
        <div className='container-index'>
            <form onSubmit={loginForm.handleSubmit}>
                <div className="title-bar">
                    <div className='title-login'>Bienvenido</div>
                    <div className='error-login'>{errorLogin && 'Credenciales incorrectas'}</div>
                </div>
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
                            error={loginForm.touched.userName && Boolean(loginForm.errors.userName)}
                            helperText={loginForm.touched.userName && loginForm.errors.userName}
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
                            error={loginForm.touched.password && Boolean(loginForm.errors.password)}
                            helperText={loginForm.touched.password && loginForm.errors.password}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} className={'align-center'}>
                        <div className='forgot-password' onClick={() => redirectToCreateUser()}>¿No tienes cuenta?</div>
                    </Grid>
                    <Grid item md={5} xs={12} className={'align-center'}>
                        <div className='forgot-password' onClick={() => redirectToForgotPassword()}>¿Olvidaste tu contraseña?</div>
                    </Grid>
                    <Grid item md={3} xs={12} >
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
