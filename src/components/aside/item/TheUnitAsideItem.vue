<script setup lang="ts">
import { useUnitStore } from '@/stores/unit';
import {
	Opportunity,
	Refresh,
	Sunny,
	Refrigerator,
	SetUp,
	Filter,
	Odometer,
} from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

defineProps<{
	toggleName: string;
	toggleText: string;
	toggleIcon: string;
}>();
const store = useUnitStore();
const { unit } = storeToRefs(store);
const { setIsShow } = store;
const powerStatus = ref<boolean>(false);
const handleChangePower = () => {
	powerStatus.value = !powerStatus.value;
};
</script>
<template>
	<label class="aside-item" @click.prevent="setIsShow(toggleName)">
		<input
			type="checkbox"
			:name="toggleName"
			:checked="unit[toggleName].isShow"
			class="squre-toggle"
		/>
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
		<div class="toggle" @click.stop.prevent="handleChangePower">
			<div :class="'toggle-item ' + (powerStatus ? 'active' : '')">
				<small>{{ powerStatus ? 'ON' : 'OFF' }}</small>
			</div>
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
	background-color: #000;
	color: #fff;

	font-weight: 900;
	justify-content: center;
	flex-wrap: wrap;
	align-content: space-around;
	cursor: pointer;
}

.aside-item input {
	display: none;
}

.toggle-item {
	width: 40px;
	height: 40px;
	background-color: hsl(0, 0%, 80%);
	border-radius: 1.7rem;
	padding: 0.25rem 0;
	display: flex;
	align-self: center;
	margin-left: 12px;
	transition: background-color 100ms 100ms;
	align-items: center;
	justify-content: center;
}
.toggle-item small {
	font-weight: bolder;
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

.toggle-item.active {
	background-color: #d9ef97;
}
.aside-item:has(.squre-toggle:checked) {
	background: #fff;
	color: hsl(0, 0%, 30%);
}
</style>
