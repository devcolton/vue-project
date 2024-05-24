<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<component :is="$route.meta.layout">
		<RouterView :key="$route.fullPath" />
	</component>
</template>

<style scoped></style>
