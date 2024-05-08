<script setup lang="ts">
import '@/assets/css/nav.css';
import { ref } from 'vue';
import {
	Histogram,
	VideoCamera,
	Operation,
	PieChart,
	UserFilled,
	Setting,
} from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const isCollapse = ref(true);
const store = useUserStore();
const { user } = storeToRefs(store);
const { userAuth } = user.value;
</script>

<template>
	<nav>
		<el-menu
			:router="true"
			:default-active="$route.path"
			:collapse="isCollapse"
		>
			<el-menu-item index="/dashboard">
				<el-icon><Histogram /></el-icon>
				<template #title>대시보드</template>
			</el-menu-item>
			<el-menu-item index="/unit">
				<el-icon><Operation /></el-icon>
				<template #title>장치관리</template>
			</el-menu-item>
			<el-menu-item index="/cctv">
				<el-icon><VideoCamera /></el-icon>
				<template #title>CCTV</template>
			</el-menu-item>
			<el-menu-item index="/statistics">
				<el-icon><PieChart /></el-icon>
				<template #title>기간별 누적데이터</template>
			</el-menu-item>
			<el-menu-item index="/user" v-if="userAuth === 'ADMIN'">
				<el-icon><UserFilled /></el-icon>
				<template #title>사용자관리</template>
			</el-menu-item>
			<el-menu-item index="/setting">
				<el-icon><setting /></el-icon>
				<template #title>환경설정</template>
			</el-menu-item>
		</el-menu>
	</nav>
</template>

<style scoped>
nav ul {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #082622;
}

nav ul li {
	color: #fff;
}
</style>
