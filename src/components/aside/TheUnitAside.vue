<script setup lang="ts">
import '@/assets/css/aside.css';
import TheUnitAsideItem from '@/components/aside/item/TheUnitAsideItem.vue';
</script>

<template>
	<aside class="aside">
		<TheUnitAsideItem
			toggleText="냉난방기"
			toggleName="conditioner"
			toggleIcon="conditioner"
		/>
		<TheUnitAsideItem
			toggle-text="차광막"
			toggleName="sunshade"
			toggleIcon="sunshade"
		/>
		<TheUnitAsideItem toggleText="LED" toggleName="led" toggleIcon="led" />
		<TheUnitAsideItem
			toggleText="환기팬"
			toggleName="ventilationFan"
			toggleIcon="ventilationFan"
		/>
		<TheUnitAsideItem toggleText="가스제어" toggleName="gas" toggleIcon="gas" />
		<TheUnitAsideItem
			toggleText="유동팬"
			toggleName="floatingFan"
			toggleIcon="floatingFan"
		/>
		<TheUnitAsideItem toggleText="펌프" toggleName="pump" toggleIcon="pump" />
	</aside>
</template>

<style scoped></style>
