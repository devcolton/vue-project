<script setup lang="ts">
import { onMounted, ref } from 'vue';

const tabItems = ref([
	{ tabId: 1, tabText: '지온지습률' },
	{ tabId: 2, tabText: '잔존CO2' },
	{ tabId: 3, tabText: '실내온도변화' },
	{ tabId: 4, tabText: '실내습도변화' },
	{ tabId: 5, tabText: '급액횟수' },
]);
const selectedTab = ref<number>(1);

onMounted(async () => {});
</script>

<template>
	<div class="tab-container">
		<div class="radio-tile-group">
			<div class="input-container" v-for="item in tabItems" :key="item.tabId">
				<input
					:id="'tab' + item.tabId"
					class="radio-button"
					type="radio"
					name="category"
					:checked="selectedTab === item.tabId"
				/>
				<div class="radio-tile">
					<div class="icon walk-icon"></div>
					<label :for="'tab' + item.tabId" class="radio-tile-label">{{
						item.tabText
					}}</label>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.tab-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.radio-tile-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.radio-tile-group .input-container {
	position: relative;
	width: fit-content;
	min-width: 125px;
	height: 40px;
	margin: 0.5rem;
}

.radio-tile-group .input-container .radio-button {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	margin: 0;
	cursor: pointer;
}

.radio-tile-group .input-container .radio-tile {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border: 2px solid #082622;
	background-color: #082622;
	border-radius: 5px;
	padding: 1rem;
	transition: transform 300ms ease;
}

.radio-tile-group .input-container .icon svg {
	fill: #d9ef97;
	width: 2rem;
	height: 2rem;
}

.radio-tile-group .input-container .radio-tile-label {
	text-align: center;
	font-size: 0.95rem;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: white;
}

.radio-tile-group .input-container .radio-button:checked + .radio-tile {
	background-color: #d9ef97;
	border: 2px solid #d9ef97;
	color: white;
	transform: scale(1.1, 1.1);
}

.radio-tile-group
	.input-container
	.radio-button:checked
	+ .radio-tile
	.icon
	svg {
	fill: white;
	background-color: #d9ef97;
}

.radio-tile-group
	.input-container
	.radio-button:checked
	+ .radio-tile
	.radio-tile-label {
	color: black;
	background-color: #d9ef97;
}
</style>
