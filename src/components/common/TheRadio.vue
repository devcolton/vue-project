<script setup lang="ts">
defineProps<{
	inputId: string;
	inputName: string;
	inputValue: string;
	labelName: string;
}>();
</script>

<template>
	<label class="radio-button">
		<input type="radio" :id="inputId" :name="inputName" :value="inputValue" />
		<span class="radio"></span>
		{{ labelName }}
	</label>
</template>

<style scoped>
.radio-button {
	display: flex;
	gap: 10px;
	justify-content: center;
	margin: 10px;
	position: relative;
	align-items: center;
	color: white;
}

.radio-button input[type='radio'] {
	position: absolute;
	opacity: 0;
}

.radio {
	position: relative;
	display: inline-block;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid #d9ef97;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	transform: translateZ(-25px);
	transition: all 0.3s ease-in-out;
}

.radio::before {
	position: absolute;
	content: '';
	width: 10px;
	height: 10px;
	top: 5px;
	left: 5px;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	opacity: 0;
	transition: all 0.3s ease-in-out;
}

.radio-button input[type='radio']:checked + .radio {
	/* border-color: #5cb85c; */
	transform: translateZ(0px);
	background-color: #d9ef97;
}

.radio-button input[type='radio']:checked + .radio::before {
	opacity: 1;
}
</style>
