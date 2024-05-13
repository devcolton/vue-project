<script setup lang="ts">
import '@/assets/css/main.css';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';
import TheUnitAside from '@/components/aside/TheUnitAside.vue';
import TheDashboardAside from '@/components/aside/TheDashboardAside.vue';
import TheCctvAside from '@/components/aside/TheCctvAside.vue';
// import TheUserAside from '@/components/aside/TheUserAside.vue';
</script>

<template>
	<div class="wrap">
		<TheHeader />
		<main class="container">
			<TheNav />
			<!-- <TheUserAside v-if="$route.name === 'user'" /> -->
			<slot />
			<TheDashboardAside v-if="$route.name === 'dashboard'" />
			<TheUnitAside v-if="$route.name === 'unit'" />
			<TheCctvAside v-if="$route.name === 'cctv'" />
		</main>
		<TheFooter />
	</div>
</template>
