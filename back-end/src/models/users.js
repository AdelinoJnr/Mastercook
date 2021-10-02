const { ObjectId } = require('mongodb');
const getConnection = require('./connection');

const getAll = async () => {
	const db = await getConnection();
	const users = await db.collection('users').find().toArray();
	return users;
};

const getById = async (id) => {
	const db = await getConnection();
	const user = await db.collection('users').findOne({ _id: ObjectId(id) });
	return user;
};

const create = async (data) => {
	const db = await getConnection();
	const user = await db.collection('users').insertOne({ ...data });
	return user.ops[0];
};

const update = async (id, data) => {
	const db = await getConnection();
	const user = await db.collection('users')
		.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...data } });
	return user;
};

const remove = async (id) => {
	const db = await getConnection();
	await db.collection('users').deleteOne({ _id: ObjectId(id) });
};

const getByName = async (name) => {
	const db = await getConnection();
	const user = await db.collection('users').findOne({ name });
	return user;
};

const getByEmail = async (email) => {
	const db = await getConnection();
	const user = await db.collection('users').findOne({ email });
	return user;
};

module.exports = {
	getAll,
	getByEmail,
	getById,
	getByName,
	remove,
	create,
	update
};