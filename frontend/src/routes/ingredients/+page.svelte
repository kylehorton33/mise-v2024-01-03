<script lang="ts">
	import { ingredients } from '$lib/store';
</script>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Ingredients</h1>
		<p>Choose from this list of ingredients:</p>
		<ul>
			{#each $ingredients as { name }}
				<li>{name}</li>
			{/each}
		</ul>
	</div>
</div>
