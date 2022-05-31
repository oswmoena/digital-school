// import React from 'react';
import { Button, FormControl, FormHelperText, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../Constants/ROLES';
import { RegisterSchema } from '../../../Validations/RegisterSchema';
import './index.css'

interface RegisterProps {
}

const Register = () => {
    // let navigate = useNavigate();

    const handleSubmit = () => {
        // navigate("/home");
    }
    const handleError = (value: any) => {
        console.log(value)
        return 'as'
    }

    const registerForm = useFormik({
        initialValues: {
            userName: '',
            password: '',
            userMail: '',
            role: '',
            passwordConfirm: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values: RegisterProps) => {
            console.log('values', values)
            handleSubmit()

        },
    });

    return <div className='container-index'>
        <h1> Registro</h1>
        <form onSubmit={registerForm.handleSubmit}>
            <p className="register-subtitle">
                Recuerde que el usuario debe ser validado dentro de la organización
            </p>
            <Grid container spacing={1}>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Nombre</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <TextField
                        id="userName"
                        data-testid="userName"
                        name="userName"
                        autoComplete='off'
                        size='small'
                        variant="outlined"
                        className='input-name'
                        onChange={registerForm.handleChange}
                        value={registerForm.values.userName}
                        error={registerForm.touched.userName && Boolean(registerForm.errors.userName)}
                        helperText={registerForm.touched.userName && registerForm.errors.userName}
                    />
                </Grid>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Correo</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <TextField
                        id="userMail"
                        name="userMail"
                        data-testid="userMail"
                        autoComplete='off'
                        size='small'
                        variant="outlined"
                        className='input-name'
                        onChange={registerForm.handleChange}
                        value={registerForm.values.userMail}
                        error={registerForm.touched.userMail && Boolean(registerForm.errors.userMail)}
                        helperText={registerForm.touched.userMail && registerForm.errors.userMail}
                    />
                </Grid>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Rol</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <FormControl sx={{ width: '100%' }}>
                        <Select
                            id="role"
                            name="role"
                            data-testid="role"
                            className='input-role'
                            variant="outlined"
                            size='small'
                            value={registerForm.values.role}
                            onChange={registerForm.handleChange}
                            error={registerForm.touched.role && Boolean(registerForm.errors.role)}
                        >
                            {ROLES.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                )
                            })}
                        </Select>
                        {registerForm.touched.role && Boolean(registerForm.errors.role) && <FormHelperText style={{ color: '#D32F2F' }}>{registerForm.errors.role}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Contraseña</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <TextField
                        id="password"
                        name="password"
                        data-testid="password"
                        autoComplete='off'
                        size='small'
                        variant="outlined"
                        className='input-name'
                        type='password'
                        onChange={registerForm.handleChange}
                        value={registerForm.values.password}
                        error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                        helperText={registerForm.touched.password && registerForm.errors.password}
                    />
                </Grid>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Confirme Contraseña</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <TextField
                        id="passwordConfirm"
                        name="passwordConfirm"
                        data-testid="passwordConfirm"
                        autoComplete='off'
                        size='small'
                        variant="outlined"
                        className='input-name'
                        type='password'
                        onChange={registerForm.handleChange}
                        value={registerForm.values.passwordConfirm}
                        error={registerForm.touched.passwordConfirm && Boolean(registerForm.errors.passwordConfirm)}
                        helperText={registerForm.touched.passwordConfirm && registerForm.errors.passwordConfirm}
                    />
                </Grid>
                <Grid item md={12} xs={12} >
                    <div className='button-bar'>
                        <Button
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
    </div>;
};

export default Register;
