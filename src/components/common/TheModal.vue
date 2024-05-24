<script setup lang="ts">
defineProps<{
	title: string;
	size: string;
	btnName: string;
}>();
const emit = defineEmits<{
	(e: 'close'): void;
	(e: 'click'): void;
}>();
</script>

<template>
	<div class="modalcontainer" @click.self="emit('close')">
		<div class="flex">
			<div :class="'modal ' + size">
				<div class="close" @click="emit('close')"><span>&#43;</span></div>
				<div class="title">
					<h2>{{ title }}</h2>
				</div>
				<div class="content">
					<slot />
				</div>
				<div class="buttons">
					<button type="button" @click="emit('close')">취소</button>
					<button type="button" @click="emit('click')">{{ btnName }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modalcontainer {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.5);
	z-index: 10;
}

.modal {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 600px;
	background-color: #1a413d;
	border-radius: 0.5rem;
}

.lg {
	width: 1000px;
}

.modal .title {
	padding: 30px;
}

.modal .content {
	padding: 0 30px 30px 30px;
	max-height: 650px;
	overflow: auto;
}

.modal .close {
	cursor: pointer;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	position: absolute;
	right: 0;
	font-size: 40px;
	span {
		transform: rotate(45deg);
		display: block;
	}
}

.modal .buttons {
	display: flex;
}

.modal .buttons button {
	width: 50%;
	line-height: 50px;
	text-align: center;
	color: #4d5c6e;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 0 0 0 0.5rem;
}

.modal .buttons button:hover {
	filter: brightness(0.7);
}

.modal .buttons button:nth-of-type(2) {
	background-color: #d9ef97;
	border-radius: 0 0 0.5rem 0;
}

.modal .buttons button:nth-of-type(2):hover {
	filter: brightness(1.2);
}
</style>
