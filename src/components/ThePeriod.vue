<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import { getLastDate } from '@/assets/js/common';
import type { OptionItem } from '@/interfaces/Component.interface';

const TODAY = new Date();

const yearOptionItems = ref([
	{ value: '2024', text: '2024년' },
	{ value: '2025', text: '2025년' },
	{ value: '2026', text: '2026년' },
	{ value: '2027', text: '2027년' },
	{ value: '2028', text: '2028년' },
	{ value: '2029', text: '2029년' },
	{ value: '2030', text: '2030년' },
]);
const monthOptionItems = ref([
	{ value: '1', text: '1월' },
	{ value: '2', text: '2월' },
	{ value: '3', text: '3월' },
	{ value: '4', text: '4월' },
	{ value: '5', text: '5월' },
	{ value: '6', text: '6월' },
	{ value: '7', text: '7월' },
	{ value: '8', text: '8월' },
	{ value: '9', text: '9월' },
	{ value: '10', text: '10월' },
	{ value: '11', text: '11월' },
	{ value: '12', text: '12월' },
]);
const dayOptionItems = ref<OptionItem[]>([]);
const period = ref({
	startYear: String(TODAY.getFullYear()),
	startMonth: String(TODAY.getMonth() + 1),
	startDate: String(TODAY.getDate()),
	endYear: String(TODAY.getFullYear()),
	endMonth: String(TODAY.getMonth() + 1),
	endDate: String(TODAY.getDate()),
});

const handleChangeSelect = async (name: string, value: string) => {
	period.value = { ...period.value, [name]: value };

	if (!(name === 'startDate' || name === 'endDate')) {
		setDate();
	}
};
const setDate = async () => {
	const lasteDate = await getLastDate(
		period.value.startYear,
		period.value.startMonth,
	);
	const days = [];

	for (let index = 1; index <= lasteDate; index++) {
		days.push({ value: String(index), text: index + '일' });
	}

	dayOptionItems.value = days;
};

onMounted(() => {
	setDate();
});
</script>

<template>
	<div class="period">
		<div class="inline-group half">
			<TheSelectbox
				selectName="startYear"
				:value="period.startYear"
				:optionItems="yearOptionItems"
				@change="handleChangeSelect"
			/>
			<TheSelectbox
				selectName="startMonth"
				:value="period.startMonth"
				:optionItems="monthOptionItems"
				@change="handleChangeSelect"
			/>
			<TheSelectbox
				selectName="startDate"
				:value="period.startDate"
				:optionItems="dayOptionItems"
				@change="handleChangeSelect"
			/>
		</div>
		<div class="input-group symbol">~</div>
		<div class="inline-group half">
			<TheSelectbox
				selectName="endYear"
				:value="period.endYear"
				:optionItems="yearOptionItems"
				@change="handleChangeSelect"
			/>
			<TheSelectbox
				selectName="endMonth"
				:value="period.endMonth"
				:optionItems="monthOptionItems"
				@change="handleChangeSelect"
			/>
			<TheSelectbox
				selectName="endDate"
				:value="period.endDate"
				:optionItems="dayOptionItems"
				@change="handleChangeSelect"
			/>
		</div>
	</div>
</template>

<style scoped>
.period {
	display: flex;
	background-color: #082622;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
	align-self: center;
	width: 85%;
}
.symbol {
	width: max-content;
}
.half {
	width: 50%;
}
</style>
