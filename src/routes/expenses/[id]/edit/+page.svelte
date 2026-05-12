<script>
	// @ts-nocheck

	let { data } = $props();

	let expense = $derived(data.expense);
	let group = $derived(data.group);
</script>

<main class="page">
	<section class="card">
		<header class="detail-top">
			<a href={`/groups/${group.slug}`} class="back" aria-label="Zurück">←</a>

			<div>
				<h1>Expense bearbeiten</h1>
				<p class="subtitle">{group.name}</p>
			</div>

			<div></div>
		</header>

		<form method="POST" action="?/updateExpense" class="form">
			<div>
				<label for="description">Beschreibung</label>
				<input id="description" name="description" type="text" required value={expense.description} />
			</div>

			<div>
				<label for="amount">Betrag</label>
				<input id="amount" name="amount" type="number" step="0.01" required value={expense.amount} />
			</div>

			<div>
				<label for="paidBy">Bezahlt von</label>
				<select id="paidBy" name="paidBy">
					{#each group.members as member}
						<option value={member} selected={member === expense.paidBy}>
							{member}
						</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="date">Datum</label>
				<input id="date" name="date" type="date" required value={expense.date} />
			</div>

			<div class="buttons">
				<button type="submit" class="save-button">Änderungen speichern</button>
				<a href={`/groups/${group.slug}`} class="secondary-button">Abbrechen</a>
			</div>
		</form>

		<form method="POST" action="?/deleteExpense" class="delete-form">
			<button
				type="submit"
				class="delete-link"
				onclick={(event) => {
					if (!confirm('Möchtest du diese Ausgabe wirklich löschen?')) {
						event.preventDefault();
					}
				}}
			>
				Ausgabe löschen
			</button>
		</form>
	</section>
</main>