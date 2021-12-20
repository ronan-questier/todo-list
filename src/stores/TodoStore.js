import { writable } from 'svelte/store';
import { Updater } from 'svelte/store';
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
	});
};
