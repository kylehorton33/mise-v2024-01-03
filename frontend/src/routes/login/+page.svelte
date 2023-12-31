<form
	action="?/login"
	method="post"
	class="container flex flex-col h-full items-center justify-center space-y-5"
>
	<h1 class="h1">Login</h1>
	<div>
		<label for="email" class="label">Email:</label>
		<input type="email" name="email" id="email" class="input" />
	</div>
	<div>
		<label for="password" class="label">Password:</label>
		<input type="password" name="password" id="password" class="input" />
	</div>
	<button class="btn variant-filled-success">Login</button>
</form>
