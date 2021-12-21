<script>
	import { deleteTodo, toggleTodoCompleted } from '../stores/TodoStore';
	export let todo;
</script>

<li
	class="bg-white flex items-center shadow-sm border border border-grey-200 rounded-lg my-2 py-2 px-4"
>
	<input
		type="checkbox"
		name="completed"
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id)}
		class="mr-2 form-checkbox h-5 w-5"
		id=""
	/>
	<span class={`flex-1 text-gray-800  ${todo.completed ? 'line-through' : ''}`}>
		{todo.text}
	</span>
</li>
