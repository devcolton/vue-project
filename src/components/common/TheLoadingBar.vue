<script setup lang="ts">
defineProps<{
	isLoading: boolean;
}>();
</script>

<template>
	<div class="loading-bar-container" v-if="isLoading">
		<div class="loading-bar">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<style scoped>
.loading-bar-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.3);
	z-index: 10;
}

.loading-bar {
	display: inline-block;
	position: fixed;
	width: 64px;
	height: 64px;
	top: 50%;
	left: 50%;
}

.loading-bar div {
	display: inline-block;
	position: absolute;
	left: 6px;
	width: 13px;
	background: #42b883;
	animation: loading-bar 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.loading-bar div:nth-child(1) {
	left: 6px;
	animation-delay: -0.24s;
}

.loading-bar div:nth-child(2) {
	left: 26px;
	animation-delay: -0.12s;
}

.loading-bar div:nth-child(3) {
	left: 45px;
	animation-delay: 0;
}

@keyframes loading-bar {
	0% {
		top: 6px;
		height: 51px;
	}

	50%,
	100% {
		top: 19px;
		height: 26px;
	}
}
</style>
