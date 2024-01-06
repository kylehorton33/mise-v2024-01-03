<script lang="ts">
	export let form: any;
</script>

<form
	action="?/register"
	method="post"
	class="container mx-auto flex flex-col h-full items-center justify-center space-y-5 w-72"
>
	<div class="space-y-6">
		<h1 class="h2 text-center">Register</h1>
		<div>
			<label for="email" class="label">Email:</label>
			<input type="email" name="email" id="email" class="input" value={form?.data?.email || ''} />
			<p class="text-sm text-error-500">{form?.errors?.email || ''}</p>
		</div>
		<div>
			<label for="password" class="label">Password:</label>
			<input type="password" name="password" id="password" class="input" value={form?.data?.password || ''} />
			<p class="text-sm text-error-500">{form?.errors?.password || ''}</p>
		</div>
		<div>
			<label for="passwordConfirm" class="label">Confirm Password:</label>
			<input type="password" name="passwordConfirm" id="passwordConfirm" class="input" value={form?.data?.passwordConfirm || ''} />
			<p class="text-sm text-error-500">{form?.errors?.passwordConfirm || ''}</p>
		</div>
		<div>
			<button class="mt-2 btn variant-filled-primary w-full">Register</button>
			<p class="text-sm text-error-500">{form?.errors?.register || ''}</p>
		</div>
		<div class="pt-6 text-center text-sm">
			Already have an account?
			<a href="/auth/login" class="underline">Login</a> here.
		</div>
	</div>
</form>
