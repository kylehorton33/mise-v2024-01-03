<script lang="ts">
	export let data;
	const { user } = data;

	function dateFormat(date: string) {
		return new Date(Date.parse(date)).toDateString();
	}
</script>

<div class="flex flex-col h-full items-center justify-center space-y-5 p-4">
	<div class="card flex flex-col space-y-5 p-4 font-mono">
		<h1 class="h2 text-center">Account:</h1>
		<p>Username: {user.username}</p>
		<p>Email: {user.email}</p>
		<p>Account Created: {dateFormat(user.created)}</p>
		<form action="?/logout" method="post" class="h3 text-center">
			<button class="btn variant-filled-error">Logout</button>
		</form>
	</div>
</div>
