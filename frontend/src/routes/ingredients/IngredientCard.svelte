<script lang="ts">
	export let ingredient;
	const { id, name, slug, unit } = ingredient;
</script>

<div class="card p-2">
	<span class="flex justify-between">
		<h1 class="h3">{name}</h1>
		{#if unit}
			<span class="badge variant-filled-secondary">{unit}</span>
		{/if}
	</span>
</div>
