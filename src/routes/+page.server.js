import { getGroups } from '$lib/server/groups.js';

export async function load() {
	const groups = await getGroups();

	return {
		groups
	};
}