<template>
	<section
		class="max-w-[384px] w-full p-6 rounded-[1.25rem] bg-white border border-black [box-shadow:8px_8px_0px_0px_#000] flex flex-col"
	>
		<div class="w-full h-[12.5rem] bg-yellow rounded-[.625rem] overflow-hidden">
			<CardHeader class="w-full" preserveAspectRatio="xMinYMin slice"  />
		</div>

		<p
			class="py-[.25rem] text-black font-bold px-[.75rem] bg-yellow rounded-[.25rem] self-start mt-[1.5rem] text-bodyS"
		>
			Learning
		</p>

		<p class="mt-[.75rem] text-bodyS">Published 21 Dec 2023</p>
		<a class="mt-[.75rem] heading font-bold text-black hover:text-yellow transition-colors" href="/">HTML & CSS foundations</a>

		<p class="text-grey mt-[.75rem] body-m">
			These languages are the backbone of every website, defining
			structure, content, and presentation.
		</p>

		<div class="flex gap-[.75rem] mt-6 items-center body-s font-bold">
			<img src="/userpic.png" alt="" />
			<p>Greg Hooper</p>
		</div>
	</section>
</template>

<script setup lang="ts">
	import CardHeader from "./CardHeader.vue";
</script>
