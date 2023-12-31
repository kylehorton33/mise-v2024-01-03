<script lang='ts'>
	import { AppBar } from '@skeletonlabs/skeleton';
	export let user: App.Locals['user'];
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">
		{#if user}
			<a href="/account" class="btn variant-outline-primary rounded-full w-4">{user.username[0].toUpperCase()}</a>
		{:else}
			<a href="/login" class="btn variant-outline-primary">Login</a>
		{/if}
	</svelte:fragment>
</AppBar>
