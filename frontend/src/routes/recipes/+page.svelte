<script lang="ts">
	import { recipes, filterTerm } from '$lib/store';
	import RecipeCard from './RecipeCard.svelte';
	// TODO: hide the recipes that are 'mix' ingredients such as 'simple syrup'
</script>

<svelte:head>
	<title>mise | Recipes</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Recipes</h1>
		<!-- TODO: exit the search bar on enter press -->
		<input
			type="text"
			class="input w-72"
			placeholder="Search {$recipes.length} recipes..."
			bind:value={$filterTerm}
		/>
		<ul class="space-y-2">
			{#each $recipes as recipe}
				<RecipeCard {recipe} />

			{/each}
		</ul>
        <p>Or create a new one:</p>
        <a href="/recipes/new" class="btn variant-filled-success w-full">Add</a>
	</div>
</div>
