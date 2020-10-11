import * as Yup from 'yup';

const RememberEmailInitial = {
  email: '',
};

const RememberSchemaEmail = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 50 characters')
    .required('*Email is required'),
});

const RememberPasswordInitial = {
  password: '',
};

const RememberSchemaPassword = Yup.object().shape({
  password: Yup.string()
    .min(2, '*Password must have at least 2 characters')
    .max(30, '*Password must be less than 50 characters')
    .required('*Password is required'),
});

const RememberAnythingInitial = {
  email: '',
};

const RememberAnythingPassword = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 50 characters')
    .required('*Email is required to give you response'),
  description: Yup.string()
    .max(300, '*Letter must be less than 300 characters')
    .required('*Description is required, please describe the problem'),
});

export {
  RememberEmailInitial, RememberSchemaEmail,
  RememberPasswordInitial, RememberSchemaPassword,
  RememberAnythingInitial, RememberAnythingPassword,
};
