<script setup lang="ts">
defineProps<{
	value: string;
	inputType: string;
	inputName: string;
	labelName?: string;
	labelColor?: string;
	disabled?: boolean;
	maxLength?: number;
}>();

const emit = defineEmits<{
	(e: 'change', name: string, value: string): void;
}>();

const handleChange = (event: Event) => {
	const { name } = event.target as HTMLInputElement;
	let { value } = event.target as HTMLInputElement;

	if (name === 'phoneNumber') {
		value = value
			.replace(/[^0-9]/g, '')
			.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
	}

	emit('change', name, value);
};
</script>

<template>
	<input
		:disabled="disabled"
		:value="value"
		required="true"
		:type="inputType"
		:name="inputName"
		:maxLength="maxLength"
		autocomplete="off"
		class="input"
		@input="handleChange"
	/>
	<label v-if="labelName" :class="'input-label ' + labelColor">
		{{ labelName }}
	</label>
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
.input:valid {
	outline: none;
	border: 1.5px solid #d9ef97;
}
.input:disabled {
	outline: none;
	border: 1.5px solid #9e9e9e;
}

.input:focus ~ label,
.input:valid ~ label {
	transform: translateY(-50%) scale(0.8);
	background-color: #1a413d;
	padding: 0 0.2em;
	color: #d9ef97;
}

.input:disabled ~ label {
	transform: translateY(-50%) scale(0.8);
	background-color: #1a413d;
	padding: 0 0.2em;
	color: #d9ef97;
}

.input:focus ~ label.dark,
.input:valid ~ label.dark {
	background-color: #082622;
}
</style>
