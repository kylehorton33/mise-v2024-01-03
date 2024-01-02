<!-- TODO: copy login to a register form -->
<form
	action="?/register"
	method="post"
	class="container flex flex-col h-full items-center justify-center space-y-5"
>
	<div class="card p-4 space-y-4">
		<h1 class="h2 text-center">Register</h1>
		<div>
			<label for="email" class="label">Email:</label>
			<input type="email" name="email" id="email" class="input" />
		</div>
		<div>
			<label for="password" class="label">Password:</label>
			<input type="password" name="password" id="password" class="input" />
		</div>
		<div>
			<label for="passwordConfirm" class="label">Confirm Password:</label>
			<input type="password" name="passwordConfirm" id="passwordConfirm" class="input" />
		</div>
		<button class="btn variant-filled-primary w-full">Register</button>
		<div class="mt-4 text-center">
			<a href="/auth/login">Or login to your account</a>
		</div>
	</div>
</form>
