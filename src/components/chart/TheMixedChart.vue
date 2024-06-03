<script setup lang="ts">
import {
	Chart,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	type ChartData,
	type UpdateMode,
} from 'chart.js';
import {
	nextTick,
	onMounted,
	onUnmounted,
	ref,
	shallowRef,
	toRaw,
	watch,
} from 'vue';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps<{
	data: ChartData;
	destroyDelay: number;
	updateMode: UpdateMode;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);
const chartRef = shallowRef<Chart | null>(null);

const renderChart = () => {
	if (!canvasRef.value) return;

	const { data } = props;

	chartRef.value = new Chart(canvasRef.value, {
		type: 'bar',
		data,
		options: { responsive: true, maintainAspectRatio: false },
	});
};

const destroyChart = () => {
	const chart = toRaw(chartRef.value);

	if (chart) {
		if (props.destroyDelay > 0) {
			setTimeout(() => {
				chart.destroy();
				chartRef.value = null;
			}, props.destroyDelay);
		} else {
			chart.destroy();
			chartRef.value = null;
		}
	}
};

const update = (chart: Chart) => {
	chart.update(props.updateMode);
};

onMounted(() => {
	renderChart();
});
onUnmounted(() => {
	destroyChart();
});

watch(
	() => props.data,
	(data, prevData) => {
		const chart = toRaw(chartRef.value);

		if (!chart) {
			return;
		}

		let shouldUpdate = false;

		if (data && data !== prevData) {
			shouldUpdate = true;
			chart.data = data;
		}

		if (shouldUpdate) {
			nextTick(() => {
				update(chart);
			});
		}
	},
	{ deep: true },
);
</script>

<template>
	<canvas
		ref="canvasRef"
		id="mixedChart"
		role="img"
		class="chart-component"
	></canvas>
</template>
