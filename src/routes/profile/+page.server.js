import { getGroups } from '$lib/server/groups.js';

const profileName = 'Alex';

export async function load() {
	const groups = await getGroups();

	const profileGroups = groups.filter((group) => group.members.includes(profileName));

	return {
		profileName,
		groups: profileGroups,
		groupCount: profileGroups.length
	};
}