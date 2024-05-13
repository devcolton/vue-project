<script setup lang="ts">
defineProps<{
	selectName: string;
	selectColor?: string;
	optionItmes: Array<optionItems>;
}>();

interface optionItems {
	value: string;
	text: string;
}
</script>

<template>
	<div class="select">
		<select :name="selectName" :class="selectColor">
			<option v-for="item in optionItmes" :key="item.value" :value="item.value">
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
	flex: 1;
	padding: 0 1em;
	color: #fff;
	background-color: #1a413d;
	background-image: none;
	cursor: pointer;
}
select.dark {
	background-color: #082622;
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
</style>
