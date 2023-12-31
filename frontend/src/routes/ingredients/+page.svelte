<script lang="ts">
	import { ingredients } from '$lib/store';
    import IngredientCard from './IngredientCard.svelte';
</script>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Ingredients</h1>
		<p>Choose from this list of ingredients:</p>
		<ul class="space-y-2">
			{#each $ingredients as ingredient}
				<IngredientCard ingredient={ingredient} />
			{/each}
		</ul>
	</div>
</div>
