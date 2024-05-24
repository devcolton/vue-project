<script setup lang="ts">
import { GET_CONTROLLERS } from '@/apis/commonApis';
import '@/assets/css/aside.css';
import TheUnitAsideItem from '@/components/aside/item/TheUnitAsideItem.vue';
import type { OptionItem } from '@/interfaces/Component.interface';
import { onMounted, ref } from 'vue';
import { UNIT } from '@/utils/Enum';

const controllInfo = ref({
	cid: '',
});
const optionItems = ref<Array<OptionItem>>([]);

const handleChangeSelect = async (name: string, value: string) => {
	controllInfo.value = { ...controllInfo.value, [name]: value };
};

onMounted(async () => {
	await GET_CONTROLLERS()
		.then(res => {
			console.log(res);
		})
		.catch(error => console.log(error));
});
</script>

<template>
	<aside class="aside">
		<div class="input-group">
			<TheSelectbox
				selectName="controller"
				:value="controllInfo.cid"
				:optionItems="optionItems"
				@change="handleChangeSelect"
			/>
		</div>
		<TheUnitAsideItem
			v-for="item of UNIT"
			:key="item.code"
			:toggleText="item.name"
			:toggleName="item.code"
			:toggleIcon="item.code"
		/>
	</aside>
</template>

<style scoped></style>
