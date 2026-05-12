import { error, redirect } from '@sveltejs/kit';
import { getGroupBySlug, deleteGroupBySlug } from '$lib/server/groups.js';
import { getExpensesByGroup } from '$lib/server/expenses.js';

/**
 * @param {string[]} members
 * @param {{ paidBy: string; amount: number }[]} expenses
 */
function calculateSettlements(members, expenses) {
	/** @type {Record<string, number>} */
	const balances = {};

	for (const member of members) {
		balances[member] = 0;
	}

	for (const expense of expenses) {
		const share = expense.amount / members.length;

		for (const member of members) {
			balances[member] -= share;
		}

		balances[expense.paidBy] += expense.amount;
	}

	const debtors = [];
	const creditors = [];

	for (const [name, balance] of Object.entries(balances)) {
		if (balance < -0.01) debtors.push({ name, amount: Math.abs(balance) });
		if (balance > 0.01) creditors.push({ name, amount: balance });
	}

	const settlements = [];

	while (debtors.length > 0 && creditors.length > 0) {
		const debtor = debtors[0];
		const creditor = creditors[0];
		const amount = Math.min(debtor.amount, creditor.amount);

		settlements.push({
			from: debtor.name,
			to: creditor.name,
			amount
		});

		debtor.amount -= amount;
		creditor.amount -= amount;

		if (debtor.amount < 0.01) debtors.shift();
		if (creditor.amount < 0.01) creditors.shift();
	}

	return settlements;
}

export async function load({ params }) {
	const group = await getGroupBySlug(params.slug);

	if (!group) {
		throw error(404, 'Gruppe nicht gefunden');
	}

	const expenses = await getExpensesByGroup(params.slug);
	const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
	const settlements = calculateSettlements(group.members, expenses);

	return {
		group,
		expenses,
		total,
		settlements
	};
}

export const actions = {
	deleteGroup: async ({ params }) => {
		await deleteGroupBySlug(params.slug);

		throw redirect(303, '/');
	}
};