<script lang="ts">
	import { page } from '$app/stores';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toast = $page.url.searchParams.get('msg');
	if (toast) {
		const toastStore = getToastStore();

		const t: ToastSettings = {
			message: toast,
			background: $page.url.searchParams.get('color') || 'variant-filled-surface'
		};
		toastStore.trigger(t);
	}
</script>

<form
	action="?/login"
	method="post"
	class="container mx-auto flex flex-col h-full items-center justify-center space-y-5"
>
	<div class="space-y-6">
		<h1 class="h2 text-center">Login</h1>
		<div>
			<label for="email" class="label">Email:</label>
			<input type="email" name="email" id="email" class="input" />
		</div>
		<div>
			<label for="password" class="label">Password:</label>
			<input type="password" name="password" id="password" class="input" />
		</div>
		<div>
			<button class="mt-2 btn variant-filled-success w-full">Login</button>
		</div>
		<div class="pt-6 text-center text-sm">
			No account?
			<a href="/auth/register" class="underline">Register</a> here.
		</div>
	</div>
</form>
