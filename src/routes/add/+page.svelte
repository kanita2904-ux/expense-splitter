<script>
	// @ts-nocheck

	let { data, form } = $props();

	let group = $derived(data.group);

	let amount = $state('');
	let paidBy = $state('');
	let description = $state('');
	let date = $state(new Date().toISOString().slice(0, 10));
</script>

<main class="page">
	<section class="card">
		<header class="top">
			<a href={`/groups/${group.slug}`} class="back" aria-label="Zurück">←</a>

			<div>
				<h1>Ausgabe hinzufügen</h1>
				<p class="subtitle">{group.name}</p>
			</div>

			<a href="/profile" class="profile-link" aria-label="Profil öffnen">
				<div class="profile-human">
					<div class="human-head"></div>
					<div class="human-body"></div>
				</div>
			</a>
		</header>

		<form class="form" method="POST">
			<input type="hidden" name="groupSlug" value={group.slug} />

			{#if form?.message}
				<p class="error-message">{form.message}</p>
			{/if}

			<div>
				<label for="amount">Betrag</label>
				<input
					id="amount"
					name="amount"
					bind:value={amount}
					placeholder="CHF 0.00"
					type="number"
					step="0.05"
					required
				/>
			</div>

			<div>
				<label for="paidBy">Bezahlt von</label>

				<select id="paidBy" name="paidBy" bind:value={paidBy} required>
					<option value="">Person auswählen</option>

					{#each group.members as member}
						<option value={member}>{member}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="description">Beschreibung</label>
				<input
					id="description"
					name="description"
					bind:value={description}
					placeholder="z.B. Tapas-Abendessen"
					required
				/>
			</div>

			<div>
				<label for="date">Datum</label>
				<input id="date" name="date" bind:value={date} type="date" required />
			</div>

			<button type="submit" class="save-button">Speichern</button>
		</form>
	</section>
</main>