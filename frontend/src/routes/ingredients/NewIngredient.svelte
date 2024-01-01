<script>
	// TODO: user filter term to 'pre-fill' form
	import { filterTerm } from "$lib/store";
</script>

<form action="?/create" method="POST" class="container p-4 flex h-full items-center">
	<div class="space-y-6 w-full">
		<div>
			<label for="name" class="label">Name:</label>
			<input type="text" name="name" id="name" class="input" placeholder="New ingredient name..." bind:value={$filterTerm} />
		</div>
		<div>
			<label for="unit" class="label">Unit (default oz):</label>
			<select name="unit" id="unit" class="select" value="oz">
                <option value="oz">oz</option>
                <option value="dash">dash</option>
				<option value={null}>(blank)</option>
            </select>
		</div>
		<button class="btn variant-filled-success w-full">Submit</button>
	</div>
</form>
