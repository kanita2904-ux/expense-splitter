<script>
	let { data } = $props();
</script>

<h1>MongoDB Test</h1>

{#if data.success}
	<p>Verbindung erfolgreich.</p>

	<ul>
		{#each data.collections as collection}
			<li>{collection}</li>
		{/each}
	</ul>
{:else}
	<p>Verbindung fehlgeschlagen:</p>
	<pre>{data.error}</pre>
{/if}