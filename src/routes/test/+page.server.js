import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

export async function load() {
	try {
		console.log('DB URI geladen:', DB_URI);

		const client = new MongoClient(DB_URI);

		await client.connect();

		const db = client.db('expense_splitter');

		const collections = await db.listCollections().toArray();

		await client.close();

		return {
			success: true,
			collections: collections.map((collection) => collection.name),
			error: null
		};
	} catch (error) {
		return {
			success: false,
			collections: [],
			error: error.message
		};
	}
}