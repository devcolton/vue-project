<script setup lang="ts">
import '@/assets/css/main.css';
import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';
import TheCctvAside from '@/components/aside/TheCctvAside.vue';
import TheLoadingBar from '@/components/common/TheLoadingBar.vue';
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';

const loadingStore = useLoadingStore();
const { loading } = storeToRefs(loadingStore);
</script>

<template>
	<div class="wrapper">
		<TheHeader />
		<main class="container">
			<TheNav />
			<slot />
			<TheCctvAside v-if="$route.name === 'cctv'" />
		</main>
		<!-- <TheFooter /> -->
		<TheLoadingBar :is-loading="loading" />
	</div>
</template>
