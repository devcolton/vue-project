<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue';
import TheUnitAside from '@/components/aside/TheUnitAside.vue';
import type { TimeRangeData } from '@/interfaces/Unit.interface';
import { useUnitStore } from '@/stores/unit';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const store = useUnitStore();
const { unit } = storeToRefs(store);

const timeRangeData = ref<TimeRangeData>({
	minTime: 0,
	maxTime: 1440,
	timeStep: 60,
	left: 0,
	right: 0,
	startTime: 0,
	endTime: 1440,
});
const handleSingleRange = async (event: Event) => {
	const { id, value } = event.target as HTMLInputElement;

	if (id === 'temp') {
		unit.value.conditioner.temp = Number(value);
	}
};
const handleMultiRange = async (event: Event) => {
	const { id, value } = event.target as HTMLInputElement;
	const { timeStep, maxTime } = timeRangeData.value;

	if (id === 'startTime') {
		timeRangeData.value.startTime = Number(value);
	} else {
		timeRangeData.value.endTime = Number(value);
	}

	if (timeRangeData.value.endTime - timeRangeData.value.startTime < timeStep) {
		timeRangeData.value.startTime = timeRangeData.value.startTime - timeStep;
		timeRangeData.value.endTime = timeRangeData.value.endTime + timeStep;
	} else {
		timeRangeData.value.left = (timeRangeData.value.startTime / maxTime) * 100;
		timeRangeData.value.right =
			100 - (timeRangeData.value.endTime / maxTime) * 100;
	}

	const time = timeRangeData.value.endTime - timeRangeData.value.startTime;
	unit.value.conditioner.time = Number(time);
	unit.value.conditioner.start =
		(Math.floor(timeRangeData.value.startTime / 60) < 10
			? '0' + Math.floor(timeRangeData.value.startTime / 60)
			: Math.floor(timeRangeData.value.startTime / 60)) +
		':' +
		(Math.floor(timeRangeData.value.startTime % 60) < 10
			? '0' + Math.floor(timeRangeData.value.startTime % 60)
			: Math.floor(timeRangeData.value.startTime % 60));
	unit.value.conditioner.end =
		(Math.floor(timeRangeData.value.endTime / 60) < 10
			? '0' + Math.floor(timeRangeData.value.endTime / 60)
			: Math.floor(timeRangeData.value.endTime / 60)) +
		':' +
		(Math.floor(timeRangeData.value.endTime % 60) < 10
			? '0' + Math.floor(timeRangeData.value.endTime % 60)
			: Math.floor(timeRangeData.value.endTime % 60));
};

onMounted(() => console.log(unit.value));
</script>

<template>
	<div class="content">
		<TheTitle :hasToggle="true" />
		<div class="rwrap">
			<div
				class="unit"
				v-for="(item, idx) of Object.values(unit).filter(v => v.isShow)"
				:key="idx"
			>
				<div class="unit-item">
					<div class="unit-status">
						<div>
							<h3>설정온도</h3>
							<h1>{{ item.temp }}&deg;C</h1>
						</div>
						<div>
							<h3>시간제어</h3>
							<h1>{{ item.time / 60 }}H</h1>
						</div>
					</div>
				</div>
				<div class="unit-item">
					<div class="unit-controll">
						<div class="range-area">
							<label>온도</label>
							<input
								id="temp"
								class="slider"
								max="50"
								min="0"
								step="0.5"
								:value="item.temp"
								type="range"
								@input="handleSingleRange"
							/>
							<div class="value-range">
								<span>0&nbsp;&deg;C</span>
								<span>50&nbsp;&deg;C</span>
							</div>
						</div>
						<div class="range-area">
							<label>시간</label>
							<div class="rangeslider">
								<div
									class="rangeslider-inner"
									:style="
										'left: ' +
										timeRangeData.left +
										'%; right: ' +
										timeRangeData.right +
										'%;'
									"
								></div>
								<input
									id="startTime"
									class="multi-slider"
									:min="timeRangeData.minTime"
									:max="timeRangeData.maxTime - timeRangeData.timeStep"
									:step="timeRangeData.timeStep"
									:value="timeRangeData.startTime"
									type="range"
									@input="handleMultiRange"
								/>
								<input
									id="endTime"
									class="multi-slider"
									:min="timeRangeData.minTime + timeRangeData.timeStep"
									:max="timeRangeData.maxTime"
									:step="timeRangeData.timeStep"
									:value="timeRangeData.endTime"
									type="range"
									@input="handleMultiRange"
								/>
							</div>
							<div class="value-range">
								<span>{{ item.start }}</span>
								<span>{{ item.end }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<TheBottomBox :slotList="['reset', 'save']">
			<template #reset>
				<TheButton btnName="modalopen" btnColor="border" btnText="초기화" />
			</template>
			<template #save>
				<TheButton btnName="modalopen" btnColor="primary" btnText="저장" />
			</template>
		</TheBottomBox>
	</div>
	<TheUnitAside />
</template>

<style scoped>
.unit,
.unit-item,
.unit-title {
	/* border: 1px solid #fff; */
	display: flex;
}

.unit {
	display: flex;
	flex-flow: wrap column;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
}
/* .unit-title {
	flex: 1 1 10%;
	width: 100%;
	justify-content: center;
	align-items: center;
}
.unit-title h4 {
	font-weight: 900;
} */
.unit-item {
	width: 100%;
	display: flex;
	flex-flow: wrap column;
	justify-content: center;
}

.unit-status {
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	align-items: center;
	margin: 0.25rem;
	padding: 0.25rem;
	border-radius: 20px;
	background: #1a413d;
	box-shadow:
		inset 5px 5px 0px #163633,
		inset -5px -5px 0px #1e4c47;
}
.unit-controll {
	display: flex;
	flex-flow: wrap column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
	border-radius: 20px;
	background: #1a413d;
	box-shadow:
		inset 5px 5px 0px #163633,
		inset -5px -5px 0px #1e4c47;
}

.unit-status div:first-child {
	flex: 1 1 50%;
	border-right: 0.5px solid gray;
}
.unit-status div:last-child {
	flex: 1 1 50%;
}
.unit-status h1 {
	text-align: center;
	font-size: 2.8rem;
	font-weight: 900;
	padding: 0.25rem;
	margin: 0.25rem;
}
.unit-status h3 {
	text-align: center;
	font-size: 1.4rem;
	font-weight: 600;
	padding: 0.25rem;
	margin: 0.25rem;
}

.unit-controll > div {
	width: 100%;
	padding: 2rem;
}
.range-area {
	display: flex;
	flex-flow: wrap row;
	align-items: center;
}
.range-area label {
	flex: 1 1 100%;
	margin-bottom: 0.5rem;
	text-align: center;
}
.range-area input,
.range-area .rangeslider {
	flex: 1 1 100%;
}
.value-range {
	flex: 1 1 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 0.5rem;
}
.slider {
	-webkit-appearance: none;
	height: 10px;
	border-radius: 5px;
	background-color: #4158d0;
	background-image: linear-gradient(
		43deg,
		#4158d0 0%,
		#ffcc70 50%,
		#c850c0 100%
	);
	outline: none;
	opacity: 0.7;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #4c00ff;
	background-image: linear-gradient(160deg, #fff 0%, #fff 100%);
	cursor: pointer;
}
.slider::-moz-range-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #fff 0%, #fff 100%);
	cursor: pointer;
}

.rangeslider {
	position: relative;
	height: 10px;
	border-radius: 5px;
	background-color: #ffcc70;
	outline: none;
	opacity: 0.7;
}
.rangeslider-inner {
	position: absolute;
	height: 10px;
	border-radius: 5px;
	background-color: #4158d0;
	outline: none;
	opacity: 0.7;
}
.rangeslider input {
	position: absolute;
	-webkit-appearance: none;
	background: none;
	top: -5px;
	width: 100%;
	pointer-events: none;
}
.rangeslider input::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #4c00ff;
	background-image: linear-gradient(160deg, #fff 0%, #fff 100%);
	cursor: pointer;
	pointer-events: auto;
}
.rangeslider input::-moz-range-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #fff 0%, #fff 100%);
	cursor: pointer;
	pointer-events: auto;
}
</style>
