import { fail, redirect } from '@sveltejs/kit';
import { createGroup } from '$lib/server/groups.js';

/**
 * @param {string} name
 */
function createSlug(name) {
	return name
		.toLowerCase()
		.trim()
		.replaceAll(' ', '-')
		.replaceAll('ü', 'ue')
		.replaceAll('ö', 'oe')
		.replaceAll('ä', 'ae');
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const groupName = formData.get('groupName')?.toString().trim();
		const membersRaw = formData.get('members')?.toString() ?? '[]';

		if (!groupName) {
			return fail(400, {
				message: 'Bitte gib einen Gruppennamen ein.'
			});
		}

		const members = JSON.parse(membersRaw);

		await createGroup({
			name: groupName,
			members,
			slug: createSlug(groupName)
		});

		throw redirect(303, '/');
	}
};