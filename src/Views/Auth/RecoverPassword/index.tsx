import { Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { RecoverSchema } from '../../../Validations/RecoverSchema';
import './index.css'
interface recoverProps {
    userMail: String
}

const RecoverPassword = () => {

    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/login");
    }

    const recoverForm = useFormik({
        initialValues: {
            userMail: '',
        },
        validationSchema: RecoverSchema,
        onSubmit: (values: recoverProps) => {
            handleSubmit()
        },
    })

    return <div className='container-index'>
        <form onSubmit={recoverForm.handleSubmit}>
            <h1>Recuperar Cuenta</h1>
            <Grid container spacing={1}>
                <Grid item md={5} xs={12} className={'label-input'}>
                    <p>Correo</p>
                </Grid>
                <Grid item md={7} xs={12} className={'align-center'}>
                    <TextField
                        id="userMail"
                        name="userMail"
                        autoComplete='off'
                        size='small'
                        variant="outlined"
                        className='input-name'
                        onChange={recoverForm.handleChange}
                        value={recoverForm.values.userMail}
                        error={recoverForm.touched.userMail && Boolean(recoverForm.errors.userMail)}
                        helperText={recoverForm.touched.userMail && recoverForm.errors.userMail}
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

export default RecoverPassword;
