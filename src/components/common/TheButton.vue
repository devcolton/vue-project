<script setup lang="ts">
defineProps<{
	btnName: string;
	btnText: string;
	btnColor?: string;
}>();
const emit = defineEmits<{
	(e: 'click'): void;
}>();
</script>

<template>
	<button
		type="button"
		:name="btnName"
		:class="'custom-btn ' + btnColor"
		@click="emit('click')"
	>
		{{ btnText }}
	</button>
</template>

<style scoped>
.custom-btn {
	font-family:
		PlusJakartaSans,
		-apple-system,
		BlinkMacSystemFont,
		Segoe UI,
		Roboto,
		Oxygen,
		Cantarell,
		Helvetica Neue,
		Ubuntu,
		sans-serif;
	font-size: 1rem;
	align-items: center;
	height: 48px;
	border-radius: 0.4rem;
	font-weight: 600;
	padding: 0 1.2rem;
	color: #000;
	border: none;
	cursor: pointer;
	box-shadow: 0 0.5rem 1rem rgba(143, 142, 142, 0.15) !important;
	background: #d9ef97;
	width: 100%;
}

/* .custom-btn:hover {
	background: #000;
	color: #d9ef97;
} */
.custom-btn:hover {
	filter: brightness(1.2);
}

.danger {
	background-color: #f56c6c;
}
.warning {
	background-color: #e6a23c;
}
.primary {
	background-color: #409eff;
}
.info {
	background-color: #909399;
}
.success {
	background-color: #67c23a;
}
.border {
	background-color: var(--vt-c-default);
	border: 1px solid white;
	color: #fff;
}
</style>
