<script lang="ts">
	// DONE: import { stockList } from '$lib/store'
	import { stockList } from '$lib/store';

	export let recipe: Recipe;

	const { name, slug, ingredients } = recipe;
	const flatIngredients = ingredients?.map((i) => i.ingredient.name).join(' | ');
	const missing = ingredients?.reduce((n, l) => n + +!$stockList[l.ingredient.id], 0);
</script>

<div class="card p-4 max-w-72">
	<a href="/recipes/{slug}" class="space-y-2">
		<span class="flex items-start">
			<h1 class="h5 truncate grow">{name}</h1>
			{#if missing}
				<span class="badge variant-outline-surface">{missing}</span>
			{:else}
			<span class="badge variant-filled-success">{missing}</span>
			{/if}
		</span>
		<p class="text-xs truncate grow">{flatIngredients}</p>
	</a>
</div>
