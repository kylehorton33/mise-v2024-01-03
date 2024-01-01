<script lang="ts">
	import { recipes } from '$lib/store';
	import RecipeCard from './RecipeCard.svelte';
	
</script>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Recipes</h1>
		<p>Choose from this list of recipes:</p>
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
