import { connectToDatabase } from './db.js';

/**
 * @param {any} group
 */
function serializeGroup(group) {
	return {
		_id: group._id.toString(),
		name: group.name,
		members: group.members ?? [],
		slug: group.slug,
		createdAt: group.createdAt
	};
}

export async function getGroups() {
	const db = await connectToDatabase();

	const groups = await db.collection('groups').find({}).sort({ createdAt: -1 }).toArray();
	const expenses = await db.collection('expenses').find({}).toArray();

	return groups.map((group) => {
		const groupExpenses = expenses.filter((expense) => expense.groupSlug === group.slug);
		const total = groupExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

		return {
			...serializeGroup(group),
			total,
			href: `/groups/${group.slug}`
		};
	});
}

/**
 * @param {string} slug
 */
export async function getGroupBySlug(slug) {
	const db = await connectToDatabase();

	const group = await db.collection('groups').findOne({ slug });

	if (!group) return null;

	return serializeGroup(group);
}

/**
 * @param {{
 * name: string;
 * members: string[];
 * slug: string;
 * }} group
 */
export async function createGroup(group) {
	const db = await connectToDatabase();

	await db.collection('groups').insertOne({
		name: group.name,
		members: group.members,
		slug: group.slug,
		createdAt: new Date()
	});
}

/**
 * @param {string} slug
 */
export async function deleteGroupBySlug(slug) {
	const db = await connectToDatabase();

	await db.collection('expenses').deleteMany({ groupSlug: slug });
	await db.collection('groups').deleteOne({ slug });
}