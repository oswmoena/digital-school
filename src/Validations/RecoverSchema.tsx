import * as Yup from 'yup';

export const RecoverSchema = Yup.object().shape({
    userMail: Yup.string().email('Correo no sigue el formato').required('Requerido'),
});
