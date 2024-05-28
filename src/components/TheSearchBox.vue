<script setup lang="ts">
defineProps<{
	slotList: Array<string>;
}>();
</script>

<template>
	<div class="search-group">
		<div class="search-item" v-for="(item, idx) in slotList" :key="idx">
			<slot :name="item" />
		</div>
	</div>
</template>

<style scoped>
.search-group {
	display: flex;
	justify-content: flex-start;
	padding: 5px;
	margin: 0.5rem;
	background-color: #1a413d;
}
.search-item {
	display: flex;
	align-items: center;
	flex-basis: fit-content;
	min-width: 250px;
	padding: 0 0.25rem;
}
@media screen and (max-width: 1024px) {
	.search-item {
		min-width: 230px;
	}
}
</style>
