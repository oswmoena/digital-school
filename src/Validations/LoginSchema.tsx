import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Nombre de usuario muy corto, asegúrese de escribir el correcto.')
        .max(50, 'Nombre de usuario muy largo, asegúrese de escribir el correcto.')
        .required('Requerido'),
    password: Yup.string()
        .min(2, 'Contraseña muy corta, asegúrese de escribir la correcto.')
        .max(50, 'Contraseña muy larga, asegúrese de escribir el correcto.')
        .required('Requerido'),
});
