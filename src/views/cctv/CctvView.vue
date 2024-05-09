<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue';
import { ref } from 'vue';

const subTitle = ref('1번 CAM');
</script>

<template>
	<div class="content">
		<TheTitle :subTitle="subTitle" />
	</div>
</template>

<style scoped></style>
