const Joi = require('@hapi/joi');
const getUserByToken = require('./getUserByToken');

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const isAdminValidation = async (data) => {
  const result = await getUserByToken(data);
  const schema = Joi.boolean().invalid(false);
  return schema.validate(result.isAdmin);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.isAdminValidation = isAdminValidation;
