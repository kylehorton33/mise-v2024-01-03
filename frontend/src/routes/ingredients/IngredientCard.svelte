<script lang="ts">
	// DONE: import { stockList } from '$lib/store'
	import { filterTerm, stockList } from '$lib/store';
	export let ingredient;
	const { id, name, unit } = ingredient;

	function stockChange(id: string) {
		$stockList[id] = !$stockList[id];
	}
</script>

<div class="card p-2 max-w-72" hidden={!name.toUpperCase().includes($filterTerm.toUpperCase())}>
	<span class="flex items-center">
		<!-- DONE: link checkbox with stock status -->
		<input
			type="checkbox"
			name=""
			id=""
			class="checkbox mr-3"
			on:change={() => stockChange(id)}
			checked={$stockList[id]}
		/>
		<h1 class="h5 truncate grow">{name}</h1>
		{#if unit}
			<span class="badge variant-ghost-surface">{unit}</span>
		{/if}
	</span>
</div>
