import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Nombre de usuario muy corto, asegúrese de escribir el correcto.')
        .max(50, 'Nombre de usuario muy largo, asegúrese de escribir el correcto.')
        .required('Requerido'),
    userMail: Yup.string().email('Correo no sigue el formato').required('Requerido'),
    role: Yup.string().min(2, 'Seleccione una opción').required('Requerido'),
    password: Yup.string()
        .min(2, 'Contraseña muy corta, asegúrese de escribir la correcto.')
        .max(50, 'Contraseña muy larga, asegúrese de escribir el correcto.')
        .required('Requerido'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraselas deben coincidir')
        .required('Requerido'),

});
