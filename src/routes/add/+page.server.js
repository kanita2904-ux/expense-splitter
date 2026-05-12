import { fail, redirect } from '@sveltejs/kit';
import { createExpense } from '$lib/server/expenses.js';
import { getGroupBySlug } from '$lib/server/groups.js';

function getToday() {
	return new Date().toISOString().slice(0, 10);
}

export async function load({ url }) {
	const groupSlug = url.searchParams.get('group');

	if (!groupSlug) {
		throw redirect(303, '/');
	}

	const group = await getGroupBySlug(groupSlug);

	if (!group) {
		throw redirect(303, '/');
	}

	return {
		group
	};
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const groupSlug = formData.get('groupSlug')?.toString();
		const amount = Number(formData.get('amount'));
		const paidBy = formData.get('paidBy')?.toString();
		const description = formData.get('description')?.toString();
		const date = formData.get('date')?.toString();

		if (!groupSlug || !amount || !paidBy || !description || !date) {
			return fail(400, {
				message: 'Bitte fülle alle Felder aus.'
			});
		}

		await createExpense({
			groupSlug,
			date,
			description,
			paidBy,
			amount
		});

		throw redirect(303, `/groups/${groupSlug}`);
	}
};