import { writable } from 'svelte/store';

export let todos = writable([]);

export const addTodo = (text) => {
	todos.update((cur) => {
		const newTodos = [
			...cur,
			{
				text,
				completed: false,
				id: Date.now()
			}
		];
		return newTodos;
	});
};

export const deleteTodo = (id) => {
	todos.update((todo) => todo.id != id);
};

export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id == id) {
				index = i;
				break;
			}
		}
		if (index != -1) {
			todos[index].completed = !todos[index].completed;
		}
	});
};
