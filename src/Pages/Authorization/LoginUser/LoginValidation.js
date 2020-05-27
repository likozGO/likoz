import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, '*Login must have at least 2 characters')
    .max(40, "*Login can't be longer than 40 characters")
    .required('*Login is required'),
  password: Yup.string()
    .min(2, '*Password must have at least 2 characters')
    .max(30, '*Password must be less than 50 characters')
    .required('*Password is required'),
});

export default LoginSchema;
