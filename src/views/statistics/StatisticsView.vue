<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue';
import TheTab from '@/components/TheTab.vue';
import TheSearchBox from '@/components/TheSearchBox.vue';
import ThePeriod from '@/components/ThePeriod.vue';
import TheButton from '@/components/common/TheButton.vue';
import TheConfirm from '@/components/common/TheConfirm.vue';
import TheBarChart from '@/components/chart/TheBarChart.vue';
import TheLineChart from '@/components/chart/TheLineChart.vue';
import TheMixedChart from '@/components/chart/TheMixedChart.vue';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	registerables,
	type ChartData,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	...registerables,
);
import { onMounted, ref } from 'vue';
import type {
	ConfirmData,
	VueChartjsData,
} from '@/interfaces/Common.interface';

const tabEl = ref<InstanceType<typeof TheTab> | null>(null);
const labels = ref<Array<string>>([]);
const datasets = ref<Array<VueChartjsData>>([]);
const data = ref<ChartData>({} as ChartData);
const confirmData = ref<ConfirmData>({
	message: '',
	cancelText: '취소',
	confirmText: '확인',
});
const confirmRef = ref<InstanceType<typeof TheConfirm> | null>(null);

onMounted(async () => {
	labels.value = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
	];
	datasets.value = [
		{
			label: 'Data One',
			backgroundColor: '#4dc9f6',
			borderColor: '#4dc9f6',
			data: [40, 39, 10, 40, 39, 80, 40],
			fill: true,
			pointRadius: 1,
		},
	];

	data.value = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				type: 'bar',
				label: 'Data One',
				backgroundColor: '#4dc9f6',
				borderColor: '#4dc9f6',
				data: [40, 39, 10, 40, 39, 80, 40],
			},
			{
				type: 'line',
				label: 'Data One',
				backgroundColor: '#4dc9f6',
				borderColor: '#4dc9f6',
				data: [40, 39, 10, 40, 39, 80, 40],
				pointRadius: 1,
			},
		],
	};
});

const getData = async () => {
	data.value = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				type: 'line',
				label: 'Data One',
				backgroundColor: '#4dc9f6',
				borderColor: '#4dc9f6',
				data: [40, 39, 10, 40, 39, 80, 40],
				pointRadius: 2,
				order: 0,
			},
			{
				type: 'bar',
				label: 'Data One',
				backgroundColor: '#fff',
				borderColor: '#fff',
				data: [140, 139, 110, 140, 139, 180, 140],
				order: 1,
			},
		],
	};

	confirmData.value = { ...confirmData.value, message: '삭제하시겠습니까?' };
	const isConfirm = await confirmRef.value?.open();
	if (isConfirm) {
		console.log('Confirmed');
	}
};
</script>

<template>
	<div class="content">
		<TheTitle :hasTab="true" />
		<TheTab ref="tabEl" />
		<TheSearchBox :slotList="['period', 'search']">
			<template #period>
				<ThePeriod />
			</template>
			<template #search>
				<TheButton
					btnName="modalopen"
					btnColor="border"
					btnText="조회"
					@click="getData"
				/>
			</template>
		</TheSearchBox>
		<div class="wrap">
			<div class="setting">
				<TheMixedChart
					v-if="tabEl?.selectedTab === 1"
					:data="data"
					updateMode="default"
					:destroyDelay="0"
				/>
				<TheBarChart
					v-else-if="tabEl?.selectedTab === 2"
					:labels="labels"
					:datasets="datasets"
				/>
				<TheLineChart
					v-else-if="tabEl?.selectedTab === 3"
					:labels="labels"
					:datasets="datasets"
				/>
			</div>
		</div>
	</div>
	<teleport to="body">
		<TheConfirm
			ref="confirmRef"
			:cancelText="confirmData.cancelText"
			:confirmText="confirmData.confirmText"
		>
			<h3>{{ confirmData.message }}</h3>
		</TheConfirm>
	</teleport>
</template>

<style scoped>
.period-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 0.5rem;
	margin: 0 1rem;
	border-radius: 0.5rem;
	background-color: #082622;
}
.setting {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 0.5rem;
}
.period-container div {
	flex-grow: 2;
}
.period-container button {
	flex-grow: 1;
}
</style>
