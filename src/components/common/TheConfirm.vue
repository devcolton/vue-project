<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	cancelText: string;
	confirmText: string;
}>();

const isOpen = ref<boolean>(false);
const result = ref();

const open = () => {
	isOpen.value = true;

	return new Promise(resolve => {
		result.value = resolve;
	});
};
const confirm = () => {
	isOpen.value = false;
	result.value(true);
};
const cancel = () => {
	isOpen.value = false;
	result.value(false);
};

defineExpose({
	isOpen,
	open,
});
</script>

<template>
	<div class="confirm-container" v-if="isOpen">
		<div class="confirm">
			<div class="item-container">
				<div class="confirm__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						viewBox="0 0 24 24"
						height="24"
						fill="none"
					>
						<path
							fill="#393a37"
							d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
						></path>
					</svg>
				</div>
				<div class="confirm__title">
					<slot />
				</div>
			</div>
			<div class="button-container">
				<button class="button-main" type="button" @click="cancel">
					{{ cancelText }}
				</button>
				<button class="button-secondary" type="button" @click="confirm">
					{{ confirmText }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.confirm-container {
	display: flex;
	justify-content: center;
	align-items: baseline;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	/* background-color: rgba(255, 255, 255, 0.3); */
	z-index: 10;
}

.confirm {
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Open Sans',
		'Helvetica Neue',
		sans-serif;
	width: 320px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	box-shadow: 0px 0px 5px -3px #111;
	margin-top: 2.2rem;
	background: #fff;
}

.item-container {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.confirm__icon {
	width: 20px;
	height: 20px;
	transform: translateY(-2px);
	margin-right: 8px;
}

.confirm__icon path {
	fill: #065f46;
}

.confirm__title {
	font-weight: 500;
	font-size: 14px;
	color: #065f46;
}

.confirm__close {
	width: 20px;
	height: 20px;
	cursor: pointer;
	margin-left: auto;
}

.button-container {
	display: flex;
	margin-top: 0.875rem;
	margin-bottom: -0.375rem;
	margin-left: -0.5rem;
	margin-right: -0.5rem;
}

.button-main {
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	background-color: #fce8db;
	color: rgb(22 101 52);
	font-size: 0.875rem;
	line-height: 1.25rem;
	border-radius: 0.375rem;
	border: none;
}

.button-main:hover {
	background-color: #f8c8bc;
}

.button-secondary {
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	margin-left: 0.75rem;
	background-color: #ecfdf5;
	color: #065f46;
	font-size: 0.875rem;
	line-height: 1.25rem;
	border-radius: 0.375rem;
	font-weight: bold;
	border: none;
}

.button-secondary:hover {
	background-color: #d1fae5;
}
</style>
