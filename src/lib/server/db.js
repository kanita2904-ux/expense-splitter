import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);

export async function connectDB() {
	await client.connect();

	return client.db('expense_splitter');
}