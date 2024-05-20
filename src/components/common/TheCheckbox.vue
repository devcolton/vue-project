<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	checked: boolean;
	inputId: string;
	inputName: string;
	labelName: string;
}>();

const el = ref<HTMLInputElement | null>(null);

defineExpose({
	el,
});
</script>

<template>
	<label class="custom-label">
		<input
			ref="el"
			type="checkbox"
			class="custom-checkbox"
			:id="inputId"
			:name="inputName"
			:checked="checked"
		/>
		{{ labelName }}
	</label>
</template>

<style scoped>
.custom-label {
	font-size: 18px;
	color: #fff;
	cursor: pointer;
	user-select: none;
	display: flex;
	align-items: center;
	margin: 0 10px;
}

/* Style for the custom checkbox */
.custom-checkbox {
	appearance: none;
	width: 20px;
	height: 20px;
	border: 2px solid #d9ef97;
	border-radius: 5px;
	background-color: transparent;
	display: inline-block;
	position: relative;
	margin-right: 10px;
	cursor: pointer;
}

/* Style for the custom checkmark */
.custom-checkbox::before {
	content: '';
	background-color: #d9ef97;
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0);
	width: 10px;
	height: 10px;
	border-radius: 3px;
	transition: all 0.3s ease-in-out;
}

.custom-checkbox:checked:before {
	transform: translate(-50%, -50%) scale(1);
}
</style>
