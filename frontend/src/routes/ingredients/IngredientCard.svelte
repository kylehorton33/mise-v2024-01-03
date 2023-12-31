<script lang="ts">
	// import { stockList } from '$lib/store'
	// link up checkbox with stock status
	export let ingredient;
	const { id, name, slug, unit } = ingredient;
</script>

<div class="card p-2 max-w-72">
	<span class="flex items-center">
		<input type="checkbox" name="" id="" class="checkbox mr-2">
		<h1 class="h5 truncate grow">{name}</h1>
		{#if unit}
			<span class="badge variant-ghost-surface">{unit}</span>
		{/if}
	</span>
</div>
