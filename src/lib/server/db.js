import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

/** @type {MongoClient | undefined} */
let client;

export async function connectToDatabase() {
	if (!DB_URI) {
		throw new Error('DB_URI fehlt in der .env Datei');
	}

	if (!client) {
		client = new MongoClient(DB_URI);
		await client.connect();
	}

	return client.db('expense_splitter');
}