<script lang="ts">
	import { recipes } from '$lib/store';
	import { page } from '$app/stores';

	const recipe = $recipes.find((recipe) => recipe.slug === $page.params.slug);
</script>

{#if recipe}
	<div class="py-4 px-16 flex flex-col space-y-4">
		<h1 class="h2 text-center">{recipe.name}</h1>
        <ul class="list-inside list-disc">
            {#if recipe.ingredients}
				{#each recipe.ingredients as {quantity, ingredient}}
					<li>{quantity} {ingredient.unit} {ingredient.name}</li>
				{/each}
			{/if}
        </ul>
		<p>{recipe.instructions}</p>
		<img
			src="http://127.0.0.1:8090/api/files/p7m0479jjpakez0/{recipe.id}/{recipe.image}?thumb=300x300"
			class="w-72 self-center"
			alt={recipe.name}
		/>
	</div>
{:else}
	<h1>No recipe found matching '{$page.params.slug}'</h1>
{/if}
