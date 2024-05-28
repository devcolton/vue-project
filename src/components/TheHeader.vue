<script setup lang="ts">
import '@/assets/css/header.css';
import { ref, onMounted } from 'vue';
import { Calendar } from '@element-plus/icons-vue';

const TODAY = ref<string>('');

onMounted(() => {
	const NOW = new Date();
	const YEAR = NOW.getFullYear();
	const MONTH =
		NOW.getMonth() + 1 < 10 ? '0' + (NOW.getMonth() + 1) : NOW.getMonth() + 1;
	const DATE =
		NOW.getDate() + 1 < 10 ? '0' + (NOW.getDate() + 1) : NOW.getDate() + 1;
	const DAY = new Date().getDay();
	let convDay = '';
	switch (DAY) {
		case 0:
			convDay = '일요일';
			break;
		case 1:
			convDay = '월요일';
			break;
		case 2:
			convDay = '화요일';
			break;
		case 3:
			convDay = '수요일';
			break;
		case 4:
			convDay = '목요일';
			break;
		case 5:
			convDay = '금요일';
			break;
		case 6:
			convDay = '토요일';
			break;

		default:
			break;
	}
	TODAY.value = `${YEAR}년 ${MONTH}월 ${DATE}일 ${convDay}`;
});
</script>

<template>
	<header class="header">
		<el-icon><Calendar /></el-icon>
		<h1>{{ TODAY }}</h1>
	</header>
</template>

<style scoped></style>
