<script lang="ts">
	import 'iconify-icon'
	import { stockList, filterTerm } from '$lib/store';

	export let recipe: Recipe;
	const { name, slug, ingredients } = recipe;

	const flatIngredients = ingredients?.map((i) => i.ingredient.name).join(' | ') || '';
	const missing = ingredients?.reduce((n, l) => n + +!$stockList[l.ingredient.id], 0);

	function filterMatch(term: string): boolean {
		const fullString = [name, flatIngredients].join();
		const match = fullString.toUpperCase().includes(term.toUpperCase());
		return match;
	}
</script>

<li class="card p-4 w-72" hidden={filterMatch($filterTerm) ? false : true}>
	<a href="/recipes/{slug}" class="space-y-2">
		<span class="flex items-start">
			<h1 class="h5 truncate grow">{name}</h1>
			{#if missing === 0}
				<iconify-icon height="20" class="text-success-400" icon="material-symbols:check-circle-outline-rounded"></iconify-icon>
			{/if}
		</span>
		<p class="text-xs truncate grow">{flatIngredients}</p>
	</a>
</li>
