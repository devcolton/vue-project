<script setup lang="ts">
import '@/assets/css/aside.css';
import TheToggle from '@/components/common/TheToggle.vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import { ref } from 'vue';

const toggleItems = ref([
	{ name: '조명1', id: ' led01' },
	{ name: '조명2', id: ' led02' },
	{ name: '조명3', id: ' led03' },
	{ name: '조명4', id: ' led04' },
	{ name: '조명5', id: ' led05' },
]);

const optionItems = ref([
	{ value: 'value01', text: '컨트롤러01' },
	{ value: 'value02', text: '컨트롤러02' },
	{ value: 'value03', text: '컨트롤러03' },
	{ value: 'value04', text: '컨트롤러04' },
	{ value: 'value05', text: '컨트롤러05' },
]);
</script>

<template>
	<aside class="aside">
		<div class="input-group">
			<TheSelectbox selectName="controller" :optionItmes="optionItems" />
		</div>
		<div class="toggle-wrap" v-for="item in toggleItems" :key="item.id">
			<span>{{ item.name }}</span>
			<TheToggle :toggleId="item.id" toggleLtext="OFF" toggleRtext="ON" />
		</div>
	</aside>
</template>

<style scoped>
.toggle-wrap {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin: 5px;
	padding: 5px;
}

.toggle-wrap span,
.toggle-wrap div {
	flex: 1 1 50%;
}
</style>
