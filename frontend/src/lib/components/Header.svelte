<script lang="ts">
	import 'iconify-icon';
	import { AppBar } from '@skeletonlabs/skeleton';
	export let user: App.Locals['user'];
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotLead="invisible"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">(left)</svelte:fragment>

	<h1 class="h2 text-primary-500">mise</h1>

	<svelte:fragment slot="trail">
		{#if user}
			<a href="/auth/account" class="btn variant-filled-primary rounded-full w-4" data-testid="account-link"
				>{user.username[0].toUpperCase()}</a
			>
		{:else}
			<a href="/auth/login" class="btn variant-outline-primary rounded-full w-4" data-testid="login-link">
				<iconify-icon width="20" height="20" icon="material-symbols:lock-open-outline"></iconify-icon>
			</a>
		{/if}
	</svelte:fragment>
</AppBar>
