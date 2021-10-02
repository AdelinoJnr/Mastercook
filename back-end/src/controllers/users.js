const Users = require('../services/users');

const getAll = async (_req, res) => {
	const { status, data } = await Users.getAll();

	res.status(status).json(data);
};

const getById = async (req, res) => {
	const { id } = req.params;
	const { status, data, err } = await Users.getById(id);
	if (err) return res.status(status).json(err);

	res.status(status).json(data);
};

const remove = async (req, res) => {
	const { id } = req.params;
	const { status, data, err } = await Users.remove(id);
	if (err) return res.status(status).json(err);

	res.status(status).json(data);
};

const create = async (req, res) => {
	const { status, data, err } = await Users.create(req.body);
	if (err) return res.status(status).json(err);

	res.status(status).json(data);
};

const update = async (req, res) => {
	const { id } = req.params;
	const { status, data, err } = await Users.getById(id, req.body);
	if (err) return res.status(status).json(err);

	res.status(status).json(data);
};

module.exports = {
	getAll,
	getById,
	remove,
	create,
	update
};