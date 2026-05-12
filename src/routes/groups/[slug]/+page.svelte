<script>
	// @ts-nocheck

	let { data } = $props();

	let group = $derived(data.group);
	let expenses = $derived(data.expenses);
	let total = $derived(data.total);
	let settlements = $derived(data.settlements);

	function formatDate(date) {
		if (!date) return '';

		if (date.includes(',')) {
			return date;
		}

		const parsedDate = new Date(date);

		if (Number.isNaN(parsedDate.getTime())) {
			return date;
		}

		return parsedDate.toLocaleDateString('de-CH', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}
</script>

<main class="page">
	<section class="card">
		<header class="detail-top">
			<a href="/" class="back" aria-label="Zurück">←</a>

			<div>
				<h1>{group.name}</h1>
				<p class="subtitle">{group.members.length} Mitglieder</p>
			</div>

			<a href="/profile" class="profile-link" aria-label="Profil öffnen">
				<div class="profile-human">
					<div class="human-head"></div>
					<div class="human-body"></div>
				</div>
			</a>
		</header>

		<section class="total-card">
			<p>Gesamtausgaben</p>
			<h2>CHF {total.toFixed(2)}</h2>
		</section>

		<section class="settlement-card">
			<div>
				<p>Ausgleich</p>

				{#if settlements.length === 0}
					<strong>Alles ist ausgeglichen.</strong>
				{:else}
					{#each settlements as settlement}
						<div class="settlement-line">
							<span>{settlement.from} → {settlement.to}</span>
							<strong>CHF {settlement.amount.toFixed(2)}</strong>
						</div>
					{/each}
				{/if}
			</div>

			<a href={`/add?group=${group.slug}`} class="add-circle" aria-label="Ausgabe hinzufügen">
				+
			</a>
		</section>

		<section class="expense-list-clean">
			{#if expenses.length === 0}
				<p class="empty">Noch keine Ausgaben in dieser Gruppe.</p>
			{:else}
				{#each expenses as expense}
					<article class="expense-entry">
						<div class="expense-entry-top">
							<h3>{formatDate(expense.date)}</h3>

							<a
								href={`/expenses/${expense._id}/edit`}
								class="edit-expense-link"
								aria-label="Ausgabe bearbeiten"
							>
								Bearbeiten
							</a>
						</div>

						<div class="expense-line">
							<div>
								<strong>{expense.description}</strong>
								<p>{expense.paidBy}</p>
							</div>

							<span>CHF {expense.amount.toFixed(2)}</span>
						</div>
					</article>
				{/each}
			{/if}
		</section>

		<form method="POST" action="?/deleteGroup" class="delete-form">
			<button
				type="submit"
				class="delete-link"
				onclick={(event) => {
					if (!confirm('Möchtest du diese Gruppe wirklich löschen?')) {
						event.preventDefault();
					}
				}}
			>
				Gruppe löschen
			</button>
		</form>
	</section>
</main>