import { ObjectId } from 'mongodb';
import { connectToDatabase } from './db.js';

/**
 * @param {any} expense
 */
function serializeExpense(expense) {
	return {
		_id: expense._id.toString(),
		groupSlug: expense.groupSlug,
		date: expense.date,
		description: expense.description,
		paidBy: expense.paidBy,
		amount: Number(expense.amount),
		createdAt: expense.createdAt
	};
}

/**
 * @param {string} groupSlug
 */
export async function getExpensesByGroup(groupSlug) {
	const db = await connectToDatabase();

	const expenses = await db
		.collection('expenses')
		.find({ groupSlug })
		.sort({ createdAt: -1 })
		.toArray();

	return expenses.map(serializeExpense);
}

/**
 * @param {string} id
 */
export async function getExpenseById(id) {
	const db = await connectToDatabase();

	const expense = await db.collection('expenses').findOne({
		_id: new ObjectId(id)
	});

	if (!expense) return null;

	return serializeExpense(expense);
}

/**
 * @param {{
 * groupSlug: string;
 * date: string;
 * description: string;
 * paidBy: string;
 * amount: number;
 * }} expense
 */
export async function createExpense(expense) {
	const db = await connectToDatabase();

	await db.collection('expenses').insertOne({
		groupSlug: expense.groupSlug,
		date: expense.date,
		description: expense.description,
		paidBy: expense.paidBy,
		amount: Number(expense.amount),
		createdAt: new Date()
	});
}

/**
 * @param {string} id
 * @param {{
 * date: string;
 * description: string;
 * paidBy: string;
 * amount: number;
 * }} expense
 */
export async function updateExpenseById(id, expense) {
	const db = await connectToDatabase();

	await db.collection('expenses').updateOne(
		{
			_id: new ObjectId(id)
		},
		{
			$set: {
				date: expense.date,
				description: expense.description,
				paidBy: expense.paidBy,
				amount: Number(expense.amount)
			}
		}
	);
}

/**
 * @param {string} id
 */
export async function deleteExpenseById(id) {
	const db = await connectToDatabase();

	await db.collection('expenses').deleteOne({
		_id: new ObjectId(id)
	});
}