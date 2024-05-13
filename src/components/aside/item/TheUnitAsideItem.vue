<script setup lang="ts">
import {
	Opportunity,
	Refresh,
	Sunny,
	Refrigerator,
	SetUp,
	Filter,
	Odometer,
} from '@element-plus/icons-vue';
defineProps<{
	toggleName: string;
	toggleText: string;
	toggleIcon: string;
}>();
// const emit = defineEmits<{
// 	(e: 'click'): void;
// }>();
</script>
<template>
	<label class="aside-item">
		<input type="checkbox" :name="toggleName" class="squre-toggle" />
		<div class="toggle toggle-icon">
			<el-icon size="50">
				<Refrigerator v-show="toggleIcon === 'conditioner'" />
				<Sunny v-show="toggleIcon === 'sunshade'" />
				<Opportunity v-show="toggleIcon === 'led'" />
				<Refresh v-show="toggleIcon === 'ventilationFan'" />
				<Odometer v-show="toggleIcon === 'gas'" />
				<SetUp v-show="toggleIcon === 'floatingFan'" />
				<Filter v-show="toggleIcon === 'pump'" />
			</el-icon>
		</div>
		<div class="toggle">
			<div class="toggle-item"></div>
		</div>
		<div class="toggle toggle-text">
			<span>{{ toggleText }}</span>
		</div>
	</label>
</template>

<style scoped>
.aside-item {
	height: 131px;
	flex-basis: 43%;
	margin: 10px;
	display: flex;
	padding: 10px;
	flex-direction: row;
	text-align: center;
	border-radius: 10px;
	color: hsl(0, 0%, 30%);
	font-weight: 900;
	background: #fff;
	justify-content: center;
	flex-wrap: wrap;
	align-content: space-around;
	cursor: pointer;
}

.aside-item input {
	display: none;
}

.toggle-item {
	width: 25px;
	height: 25px;
	background-color: #d9ef97;
	border-radius: 1.7rem;
	padding: 0.25rem 0;
	display: flex;
	align-self: center;
	margin-left: 12px;
	transition: background-color 100ms 100ms;
}

.toggle {
	flex: 1 1 40%;
	display: flex;
	flex-direction: column;
	text-align: end;
}

.toggle-icon {
	align-items: center;
}

.squre-toggle:checked ~ div .toggle-item {
	background-color: hsl(0, 0%, 80%);
}
.aside-item:has(.squre-toggle:checked) {
	background-color: #000;
}
</style>
