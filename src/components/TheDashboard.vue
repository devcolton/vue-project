<script setup lang="ts">
import '@/assets/css/dashboard.css';
import { Bar, Line } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
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
const lineChartData = ref({
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Data One',
			backgroundColor: '#4dc9f6',
			borderColor: '#4dc9f6',
			data: [40, 39, 10, 40, 39, 80, 40],
			fill: true,
			pointRadius: 1,
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
const LineChartOptions = ref({
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
	<div class="row">
		<div class="column cctv">
			<img
				src="/Users/unid/devcolton/projects/vue-project/src/assets/images/default-cctv.png"
				alt="사용자 IMAGE"
				width="100%"
				height="100%"
			/>
		</div>
		<div class="column real-time">
			<div class="header">ABCDE000001 실시간 데이터</div>
			<div class="info">
				<div class="info-item">실내온도</div>
				<el-progress
					:percentage="50"
					:strokeWidth="10"
					color="#97ca98"
					:format="(percentage: number) => '25C'"
				></el-progress>
				<div class="info-item">실내습도</div>
				<el-progress
					:percentage="55"
					:strokeWidth="10"
					color="#3d94fa"
					:format="(percentage: number) => '55%'"
				></el-progress>
				<div class="info-item">잔존CO2</div>
				<el-progress
					:percentage="30"
					:strokeWidth="10"
					color="#a0abfe"
					:format="(percentage: number) => '1,430ppm'"
				></el-progress>
				<div class="info-item">급액횟수</div>
				<el-progress
					:percentage="100"
					:strokeWidth="10"
					:width="100"
					color="#0adaff"
					:format="(percentage: number) => '4회'"
				></el-progress>
				<div class="info-item">급액PH</div>
				<el-progress
					:percentage="50"
					:strokeWidth="10"
					color="#fea0a0"
					:format="(percentage: number) => '5.9PH'"
				></el-progress>
			</div>
		</div>
		<div class="column">
			<div class="textContent">
				<p class="h1">평균습도</p>
				<span class="span">AVERAGE HUMIDITY</span>
			</div>
			<div class="graph">
				<Bar
					class="chart-component"
					id="my-chart-id"
					:options="chartOptions"
					:data="chartData"
				/>
			</div>
		</div>
		<div class="column">
			<div class="textContent">
				<p class="h1">지온지습률</p>
				<span class="span">GROUND TEMPERATURE, HUMIDITY</span>
			</div>
			<div class="graph">
				<Line
					class="chart-component"
					id="my-chart-id2"
					:options="LineChartOptions"
					:data="lineChartData"
				/>
			</div>
		</div>
		<div class="column">
			<div class="textContent">
				<p class="h1">주간 실내 온도 변화</p>
				<span class="span">WEEKLY INDOOR TEMPERATURE VARIATION</span>
			</div>
			<div class="graph">
				<Bar
					class="chart-component"
					id="my-chart-id"
					:options="chartOptions"
					:data="chartData"
				/>
			</div>
		</div>
		<div class="column">
			<div class="textContent">
				<p class="h1">전날 잔존 CO<small>2</small></p>
				<span class="span">CO<small>2</small> REMAINING THE DAY BEFORE</span>
			</div>
			<div class="graph">
				<Line
					class="chart-component"
					id="my-chart-id2"
					:options="LineChartOptions"
					:data="lineChartData"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.column.cctv {
	flex: 1 1 58%;
	height: 320px;
}
.column.cctv img {
	border-radius: 0.5rem;
}
.column.real-time {
	flex: 1 1 38%;
}
.real-time .header {
	margin: 0.5rem;
	border-radius: 2rem;
	background-color: #fff;
	color: #000;
	font-weight: bolder;
	box-shadow:
		0 10px 15px -3px rgba(33, 150, 243, 0.4),
		0 4px 6px -4px rgba(33, 150, 243, 0.4);
	height: 3rem;
	align-items: center;
	justify-content: center;
}
.real-time .info {
	border: none;
	padding: 1rem;
	text-align: center;
}
.real-time .info .info-item {
	display: flex;
	font-weight: bold;
	font-size: 0.75rem;
}
:deep(.el-progress-bar) {
	flex: 1 1 70%;
}
:deep(.el-progress__text) {
	flex: 1 1 10%;
}
:deep(.el-progress__text span) {
	color: #fff;
	font-weight: bold;
	font-size: 0.75rem;
}
.textContent {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 1rem;
}

.textContent .span {
	font-size: 0.85rem;
	margin-left: 0.5rem;
	opacity: 0.5;
}

.textContent .h1 {
	font-size: 1rem;
	font-weight: bold;
}
.graph {
	height: 100%;
}
</style>
