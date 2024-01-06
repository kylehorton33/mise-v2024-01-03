<script lang="ts">
	import { ingredients } from '$lib/store';

	let lines = [
		{ quantity: 0, id: '' },
		{ quantity: 0, id: '' }
	];

	function addNewLine() {
		lines = [...lines, { quantity: 0, id: '' }];
	}
</script>

<form
	action="?/create"
	method="post"
	enctype="multipart/form-data"
	class="flex flex-col max-w-md space-y-5 mx-auto p-4 sm:card sm:my-4"
>
	<h1 class="h2 text-center">New Recipe</h1>
	<div>
		<label for="name" class="label">Name:</label>
		<input type="text" name="name" id="name" class="input" placeholder="Recipe name..." />
	</div>
	<div>
		<span class="label">Ingredients:</span>
		<div class="space-y-2">
			{#each lines as _, index}
				<div class="grid grid-cols-10 gap-2">
					<input
						type="number"
						step="0.25"
						class="input col-span-3"
						name="line[{index}][quantity]"
						placeholder="0.75"
					/>
					<select class="select col-span-7" name="line[{index}][id]">
						<!-- FIXME: how to make disabled/default option gray like other placeholder text -->
						<option disabled selected>Ingredient (unit)</option>
						{#each $ingredients as { id, name, unit }}
							<option value={id}>{name} {unit ? `(${unit})` : ''}</option>
						{/each}
					</select>
				</div>
			{/each}
			<button
				on:click|preventDefault={() => addNewLine()}
				class="btn variant-outline-primary hover:variant-filled-primary">Add Line</button
			>
		</div>
	</div>
	<div>
		<label for="instructions">Instructions:</label>
		<textarea
			name="instructions"
			id="instructions"
			class="textarea"
			rows="4"
			placeholder="Enter recipe instructions"
		/>
	</div>
	<div>
		<label for="image">Image:</label>
		<input class="input" type="file" name="image" capture="environment" />
	</div>
	<button class="btn variant-filled-success">Save Recipe</button>
</form>
