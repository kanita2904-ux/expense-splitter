<script>
	let { data } = $props();

	let groups = $derived(data.groups);
</script>

<main class="page">
	<section class="card">
		<header class="top">
			<div>
				<h1>Expense Splitter</h1>
				<p class="subtitle">Wähle eine Gruppe aus oder erstelle eine neue.</p>
			</div>

			<a href="/profile" class="profile-link" aria-label="Profil öffnen">
				<div class="profile-human">
					<div class="human-head"></div>
					<div class="human-body"></div>
				</div>
			</a>
		</header>

		<section class="scroll-list">
			{#if groups.length === 0}
				<p class="empty">Noch keine Gruppen vorhanden.</p>
			{:else}
				{#each groups as group}
					<a href={group.href} class="group-card card-link">
						<div class="group-icon"></div>

						<div>
							<h2>{group.name}</h2>
							<p>{group.members.length} Mitglieder</p>
							<span>Gesamtausgaben: CHF {group.total.toFixed(2)}</span>
						</div>

						<strong>›</strong>
					</a>
				{/each}
			{/if}
		</section>

		<div class="buttons">
			<a href="/groups/add" class="primary-button">Neue Gruppe erstellen</a>
		</div>
	</section>
</main>