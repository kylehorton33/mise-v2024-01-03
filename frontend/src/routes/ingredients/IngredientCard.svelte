<script lang="ts">
	// TODO: import { stockList } from '$lib/store'
	export let ingredient;
	const { id, name, slug, unit } = ingredient;
</script>

<div class="card p-2 max-w-72">
	<span class="flex items-center">
		<!-- TODO: link checkbox with stock status -->
		<input type="checkbox" name="" id="" class="checkbox mr-3">
		<h1 class="h5 truncate grow">{name}</h1>
		{#if unit}
			<span class="badge variant-ghost-surface">{unit}</span>
		{/if}
	</span>
</div>
