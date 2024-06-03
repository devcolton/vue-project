<script setup lang="ts">
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
import { ref } from 'vue';
import type { VueChartjsData } from '@/interfaces/Common.interface';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
);

defineProps<{
	labels: Array<string>;
	datasets: Array<VueChartjsData>;
}>();

const chartOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
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
	<Bar
		class="chart-component"
		id="barChart"
		:options="chartOptions"
		:data="{ labels, datasets }"
	/>
</template>
