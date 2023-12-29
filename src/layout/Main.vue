<template>
	<main class="w-full min-h-screen grid justify-center items-start px-6 md:px-0 py-[9.75rem] md:place-items-center bg-yellow">
		<slot />
	</main>
</template>

<script setup lang="ts">
	import '../assets/tailwind.css'
	import '@fontsource-variable/figtree';
</script>
