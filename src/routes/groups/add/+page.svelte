<script>
	let groupName = $state('');
	let memberName = $state('');

	/** @type {string[]} */
	let members = $state([]);

	function addMember() {
		if (memberName.trim() === '') return;

		members = [...members, memberName.trim()];
		memberName = '';
	}
</script>

<main class="page">
	<section class="card">
		<header class="top">
			<a href="/" class="back" aria-label="Zurück">←</a>

			<h1>Gruppe erstellen</h1>

			<a href="/profile" class="profile-link" aria-label="Profil öffnen">
				<div class="profile-human">
					<div class="human-head"></div>
					<div class="human-body"></div>
				</div>
			</a>
		</header>

		<form method="POST" class="form">
			<div>
				<label for="groupName">Gruppenname</label>
				<input id="groupName" name="groupName" bind:value={groupName} placeholder="z.B. Barcelona Trip" />
			</div>

			<div>
				<label for="memberName">Mitglieder hinzufügen</label>

				<div class="member-row">
					<input id="memberName" bind:value={memberName} placeholder="Name eingeben" />

					<button type="button" onclick={addMember} aria-label="Mitglied hinzufügen">
						+
					</button>
				</div>
			</div>

			{#if members.length > 0}
				<section class="members-card">
					{#each members as member}
						<div class="member-item">{member}</div>
					{/each}
				</section>
			{/if}

			<input type="hidden" name="members" value={JSON.stringify(members)} />

			<button class="save-button" type="submit">Gruppe speichern</button>
		</form>
	</section>
</main>