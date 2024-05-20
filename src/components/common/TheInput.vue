<script setup lang="ts">
defineProps<{
	value: string;
	inputType: string;
	inputName: string;
	labelName: string;
	labelColor?: string;
}>();

const emit = defineEmits<{
	(e: 'change', name: string, value: string): void;
}>();

const handleChange = (event: Event) => {
	const { name, value } = event.target as HTMLInputElement;
	emit('change', name, value);
};
</script>

<template>
	<input
		:value="value"
		required="true"
		:type="inputType"
		:name="inputName"
		autocomplete="off"
		class="input"
		@change="handleChange"
	/>
	<label :class="'input-label ' + labelColor">{{ labelName }}</label>
</template>

<style scoped>
.input-group {
	width: 100%;
	position: relative;
	align-self: center;
	margin: 5px;
	padding: 5px;
}

.input {
	width: 100%;
	border: solid 1.5px #9e9e9e;
	border-radius: 1rem;
	background: none;
	padding: 1rem;
	font-size: 1rem;
	color: #f5f5f5;
}

.input-label {
	position: absolute;
	left: 2rem;
	color: #d9ef97;
	pointer-events: none;
	transform: translateY(0.8rem);
	transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
	outline: none;
	border: 1.5px solid #d9ef97;
}

.input:focus ~ label,
input:valid ~ label {
	transform: translateY(-50%) scale(0.8);
	background-color: #1a413d;
	padding: 0 0.2em;
	color: #d9ef97;
}

.input:focus ~ label.dark,
input:valid ~ label.dark {
	background-color: #082622;
}
</style>
