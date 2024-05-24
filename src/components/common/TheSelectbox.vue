<script setup lang="ts">
import type { OptionItem } from '@/interfaces/Component.interface';

defineProps<{
	value: string;
	selectName: string;
	selectColor?: string;
	defaultOption?: string;
	optionItems: Array<OptionItem>;
	disabled?: boolean;
	labelName?: string;
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
	<div class="select">
		<label v-if="labelName">{{ labelName }}</label>
		<select
			:name="selectName"
			:value="value"
			:class="selectColor"
			:disabled="disabled"
			@change="handleChange"
		>
			<option v-if="defaultOption" value="">{{ defaultOption }}</option>
			<option v-for="item in optionItems" :key="item.value" :value="item.value">
				{{ item.text }}
			</option>
		</select>
	</div>
</template>

<style scoped>
select {
	/* Reset Select */
	appearance: none;
	outline: 10px #1a413d;
	border: 0;
	box-shadow: none;
	/* Personalize */
	flex: 1 1 50%;
	padding: 0 5em 0 2em;
	color: #fff;
	background-color: #1a413d;
	background-image: none;
	cursor: pointer;
	border-radius: 0.5em;
}
select:disabled {
	background-color: #9e9e9e;
}
select.dark {
	background-color: #082622;
}
select.dark:disabled {
	background-color: #9e9e9e;
}
/* Remove IE arrow */
select::-ms-expand {
	display: none;
}
/* Custom Select wrapper */
.select {
	position: relative;
	display: flex;
	width: 100%;
	height: 2.7em;
	border-radius: 0.25em;
	overflow: hidden;
}
.select:not(:first-child) {
	margin-left: 0.5rem;
}
/* Arrow */
.select::after {
	content: '\25BC';
	position: absolute;
	top: 0;
	right: 0;
	padding: 15px 20px;
	background-color: #34495e;
	transition: 0.25s all ease;
	pointer-events: none;
}
/* Transition */
.select:hover::after {
	color: #d9ef97;
}
.select label {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 600;
	color: #d9ef97;
	padding: 0 0.5rem;
	flex: none;
	width: 5rem;
}
option {
	text-align: center;
}
</style>
