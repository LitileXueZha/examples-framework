import App from './App.svelte';
// import TodoItem from './TodoItem.svelte';

const app = new App({
	target: document.body,
	// intro: true,
	props: {
		name: 'world'
	}
});

export default app;