import { error, fail, redirect } from '@sveltejs/kit';
import { getGroupBySlug } from '$lib/server/groups.js';
import { getExpenseById, updateExpenseById, deleteExpenseById } from '$lib/server/expenses.js';

export async function load({ params }) {
	const expense = await getExpenseById(params.id);

	if (!expense) {
		throw error(404, 'Expense nicht gefunden');
	}

	const group = await getGroupBySlug(expense.groupSlug);

	if (!group) {
		throw error(404, 'Gruppe nicht gefunden');
	}

	return {
		expense,
		group
	};
}

export const actions = {
	updateExpense: async ({ request, params }) => {
		const formData = await request.formData();

		const description = formData.get('description')?.toString();
		const amount = Number(formData.get('amount'));
		const paidBy = formData.get('paidBy')?.toString();
		const date = formData.get('date')?.toString();

		const existingExpense = await getExpenseById(params.id);

		if (!existingExpense) {
			throw error(404, 'Expense nicht gefunden');
		}

		if (!description || !amount || !paidBy || !date) {
			return fail(400, {
				message: 'Bitte fülle alle Felder aus.'
			});
		}

		await updateExpenseById(params.id, {
			description,
			amount,
			paidBy,
			date
		});

		throw redirect(303, `/groups/${existingExpense.groupSlug}`);
	},

	deleteExpense: async ({ params }) => {
		const existingExpense = await getExpenseById(params.id);

		if (!existingExpense) {
			throw error(404, 'Expense nicht gefunden');
		}

		await deleteExpenseById(params.id);

		throw redirect(303, `/groups/${existingExpense.groupSlug}`);
	}
};