<script setup lang="ts">
defineProps<{
	subTitle?: string;
}>();
</script>

<template>
	<div class="title">
		<h2>
			{{ $route.meta.name }}
			<span v-show="subTitle">&nbsp;&#124;&nbsp;{{ subTitle }}</span>
		</h2>
	</div>
</template>

<style scoped>
.title {
	display: flex;
	width: 100%;
	padding: 10px 20px;
	height: 60px;
	flex-direction: row;
	align-items: center;
}

.title h2 {
	margin-right: 20px;
}

@media screen and (max-width: 1024px) {
	.title h2 {
		font-size: 1.5rem;
	}
}
</style>
