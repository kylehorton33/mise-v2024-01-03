<script lang="ts">
	// TODO: import { stockList } from '$lib/store'
	export let recipe: Recipe;
	const { name, slug, ingredients } = recipe;
</script>

<div class="card p-2 max-w-72 space-y-2">
	<a href="/recipes/{slug}" class="flex items-center">
		<h1 class="h5 truncate grow">{name}</h1>
        <span class="badge variant-soft-warning">#</span>
    </a>
    <p class="text-xs truncate">{ingredients?.map((i) => i.ingredient.name).join(' | ')}</p>
</div>
