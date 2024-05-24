<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue';
import ThePeriod from '@/components/ThePeriod.vue';
import { Bar } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
);
import { ref } from 'vue';

const chartData = ref({
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	datasets: [
		{
			label: 'Data One',
			backgroundColor: '#f87979',
			data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
		},
	],
});
const chartOptions = ref({
	responsive: true,
	scales: {
		x: {
			ticks: {
				color: '#9e9e9e',
			},
			grid: {
				color: '#9e9e9e',
			},
		},
		y: {
			ticks: {
				color: '#9e9e9e',
			},
			grid: {
				color: '#9e9e9e',
			},
		},
	},
});
</script>

<template>
	<div class="content">
		<TheTitle :hasTab="true" />
		<ThePeriod />
		<div class="wrap">
			<div class="setting">
				<Bar
					class="chart-component"
					id="my-chart-id"
					:options="chartOptions"
					:data="chartData"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.setting {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 0.5rem;
}
</style>
