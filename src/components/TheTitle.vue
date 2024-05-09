<script setup lang="ts">
import TheTab from '@/components/TheTab.vue';
import TheToggle from '@/components/common/TheToggle.vue';

defineProps<{
	subTitle?: string;
	hasTab?: boolean;
	hasToggle?: boolean;
}>();
</script>

<template>
	<div class="title">
		<h2>
			{{ $route.meta.name }}
			<span v-show="subTitle">&nbsp;&#124;&nbsp;{{ subTitle }}</span>
		</h2>
		<TheTab v-if="hasTab" />
		<TheToggle
			v-if="hasToggle"
			toggleId="autoYn"
			toggleLtext="자동"
			toggleRtext="수동"
			toggleColor="dark"
		/>
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
</style>
