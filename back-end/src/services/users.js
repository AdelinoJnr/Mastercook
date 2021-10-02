const { ObjectId } = require('mongodb');
const Users = require('../models/users');
const Schema = require('../middlewares/validate');

const getAll = async () => {
	const users = await Users.getAll();

	return { status: 200, data: users };
};

const getById = async (id) => {
	if (!ObjectId.isValid(id)) return { status: 404, err: { message: 'id invalid' } };
	const user = await Users.getById();

	return { status: 200, data: user };

};

const create = async (data) => {
	const checked = await Users.getByEmail(data.email);
	if (checked) return { status: 400, err: { message: 'Email já cadastrado' } };

	const validate = Schema.User.validate(data);
	if (validate.error) return { status: 400, err: { message: 'Invalid entries' } };

	const user = await Users.create(data);
	return { status: 200, data: user };
};

const remove = async (id) => {
	if (!ObjectId.isValid(id)) return { status: 404, err: 'id invalid' };

	await Users.remove(id);
	return { status: 200, data: { message: 'Usuário removido com sucesso!' } };
};

const update = async (id, data) => {
	if (!ObjectId.isValid(id)) return { status: 404, err: 'id invalid' };
	const user = await Users.update(id, data);

	return { status: 204, data: user };
};

module.exports = {
	getAll,
	getById,
	create,
	remove,
	update
};