const Joi = require('joi');

const User = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	age: Joi.number().required(),
});

module.exports = {
	User,
};
