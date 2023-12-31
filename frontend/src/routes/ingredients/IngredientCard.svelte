<script lang="ts">
	export let ingredient;
	const { id, name, slug, unit } = ingredient;
</script>

<div class="card p-2 max-w-72">
	<span class="flex justify-between">
		<h1 class="h5 truncate">{name}</h1>
		{#if unit}
			<span class="badge variant-ghost-surface">{unit}</span>
		{/if}
	</span>
</div>
