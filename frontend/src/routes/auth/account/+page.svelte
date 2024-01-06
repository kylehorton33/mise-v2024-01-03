<script lang="ts">
	import 'iconify-icon';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	export let data;
	const { user } = data;

	function dateFormat(date: string) {
		return new Date(Date.parse(date)).toDateString();
	}

	const drawerStore = getDrawerStore();

	function openDrawer() {
		const drawerSettings: DrawerSettings = {
			id: 'update-username',
			position: 'bottom',
			height: 'h-72',
			duration: 200
		};
		drawerStore.open(drawerSettings);
	}
</script>

<div class="flex flex-col h-full items-center justify-center space-y-5 p-4">
	<div class="sm:card flex flex-col space-y-8 p-4 font-mono">
		<h1 class="h2 text-center">Account:</h1>
		<p class="flex items-center">
			Username: {user.username}
			<button on:click={openDrawer} class="btn text-primary-400"
				><iconify-icon height="20" icon="tabler:arrows-exchange"
				></iconify-icon></button
			>
		</p>
		<p>Email: {user.email}</p>
		<p>Account Created: {dateFormat(user.created)}</p>
		<form action="?/logout" method="post" class="h3 text-center">
			<button class="btn variant-filled-surface">
				<iconify-icon height="20" icon="mi:log-out"
				></iconify-icon>
				<span>Logout</span>
				</button>
		</form>
	</div>
</div>
