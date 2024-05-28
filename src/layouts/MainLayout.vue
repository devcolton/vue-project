<script setup lang="ts">
import '@/assets/css/main.css';
import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';
import TheDashboardAside from '@/components/aside/TheDashboardAside.vue';
import TheCctvAside from '@/components/aside/TheCctvAside.vue';
// import TheUserAside from '@/components/aside/TheUserAside.vue';
</script>

<template>
	<div class="wrapper">
		<TheHeader />
		<main class="container">
			<TheNav />
			<!-- <TheUserAside v-if="$route.name === 'user'" /> -->
			<slot />
			<TheDashboardAside v-if="$route.name === 'dashboard'" />
			<TheCctvAside v-if="$route.name === 'cctv'" />
		</main>
		<!-- <TheFooter /> -->
	</div>
</template>
