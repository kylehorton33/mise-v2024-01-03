<script lang="ts">
	import { recipes } from '$lib/store';
</script>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Recipes</h1>
		<p>Choose from this list of recipes:</p>
		<ul>
			{#each $recipes as { name, slug }}
				<!-- TODO: style cards for recipes -->
				<a href="/recipes/{slug}">
					<li>{name}</li>
				</a>
			{/each}
		</ul>
        <p>Or create a new one:</p>
        <a href="/recipes/new" class="btn variant-filled-success w-full">Add</a>
	</div>
</div>
