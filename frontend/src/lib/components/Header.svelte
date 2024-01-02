<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	export let user: App.Locals['user'];
</script>

<AppBar gridColumns="grid-cols-3" slotLead="invisible" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(left)</svelte:fragment>
	
	<h1 class="h2 text-primary-500">mise</h1>

	<svelte:fragment slot="trail">
		{#if user}
			<a href="/account" class="btn variant-outline-primary rounded-full w-4"
				>{user.username[0].toUpperCase()}</a
			>
		{:else}
			<a href="/auth/login" class="btn variant-outline-primary">Login</a>
		{/if}
	</svelte:fragment>
</AppBar>
