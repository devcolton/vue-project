<script setup lang="ts">
defineProps<{
	slotList: Array<string>;
}>();
</script>

<template>
	<div class="bottom-group">
		<div class="bottom-item" v-for="(item, idx) in slotList" :key="idx">
			<slot :name="item" />
		</div>
	</div>
</template>

<style scoped>
.bottom-group {
	display: flex;
	justify-content: flex-end;
	padding: 5px;
	margin: 0.5rem 0;
	width: 100%;
}
.bottom-item {
	display: flex;
	align-items: center;
	flex-basis: fit-content;
	min-width: 120px;
	padding: 0 0.25rem;
}
</style>
