<script setup lang="ts">
import { Line } from 'vue-chartjs';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { ref } from 'vue';
import type { VueChartjsData } from '@/interfaces/Common.interface';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
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
	<Line
		class="chart-component"
		id="LineChart"
		:options="chartOptions"
		:data="{ labels, datasets }"
	/>
</template>
