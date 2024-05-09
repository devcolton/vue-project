<script setup lang="ts">
import '@/assets/css/main.css';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';
import TheUnitAside from '@/components/aside/TheUnitAside.vue';
import TheDashboardAside from '@/components/aside/TheDashboardAside.vue';
import TheCctvAside from '@/components/aside/TheCctvAside.vue';
</script>

<template>
	<div class="wrap">
		<TheHeader />
		<main class="container">
			<TheNav />
			<slot />
			<TheDashboardAside v-show="$route.name === 'dashboard'" />
			<TheUnitAside v-show="$route.name === 'unit'" />
			<TheCctvAside v-show="$route.name === 'cctv'" />
		</main>
		<TheFooter />
	</div>
</template>
