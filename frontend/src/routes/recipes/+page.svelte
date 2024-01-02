<script lang="ts">
	import { recipes, filterTerm } from '$lib/store';
	import RecipeCard from './RecipeCard.svelte';
</script>

<div class="container h-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Recipes</h1>
		<!-- TODO: search field for recipes -->
		<input
			type="text"
			class="input w-72"
			placeholder="Search {$recipes.length} recipes..."
			bind:value={$filterTerm}
		/>
		<ul class="space-y-2">
			{#each $recipes as recipe}
				<!-- DONE: style cards for recipes -->
				<RecipeCard {recipe} />

			{/each}
		</ul>
        <p>Or create a new one:</p>
        <a href="/recipes/new" class="btn variant-filled-success w-full">Add</a>
	</div>
</div>
