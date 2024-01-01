<script lang="ts">
	// TODO: import { stockList } from '$lib/store'
	export let recipe: Recipe;
	const { name, slug, ingredients } = recipe;
	const flatIngredients = ingredients?.map((i) => i.ingredient.name).join(' | ');
</script>

<div class="card p-4 max-w-72">
	<a href="/recipes/{slug}" class="space-y-2">
		<span class="flex items-center">
			<h1 class="h5 truncate grow">{name}</h1>
			<span class="badge variant-soft-warning">#</span>
		</span>
		<p class="text-xs truncate grow">{flatIngredients}</p>
	</a>
</div>
