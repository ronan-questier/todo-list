<script>
	let todo = '';

	const handleSubmit = () => {
		console.info('Nouvelle tache ajoutée !');
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="my-6">
	<div class="flex flex-col text-sm mb-2">
		<input
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="Nouvelle note..."
			class="appearance-none shadow-sm border border-grey-200 p-2 focus:outlined-none focus:border-grey-500 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
		>Ajouter</button
	>
</form>
