<script setup lang="ts">
import { GET_CONTROLLERS } from '@/apis/commonApis';
import { GET_UNIT_SETTING, GET_UNIT_STATUS } from '@/apis/unitApis';
import '@/assets/css/aside.css';
import TheUnitAsideItem from '@/components/aside/item/TheUnitAsideItem.vue';
import type { OptionItem } from '@/interfaces/Component.interface';
import { onMounted, ref } from 'vue';
import { UNIT } from '@/utils/Enum';

const controllInfo = ref({
	cid: 'AABBCC000000',
});
const optionItems = ref<Array<OptionItem>>([]);

const handleChangeSelect = async (name: string, value: string) => {
	controllInfo.value = { ...controllInfo.value, [name]: value };
};

onMounted(async () => {
	await GET_CONTROLLERS()
		.then(res => {
			console.log(res);
			optionItems.value = [
				{ text: 'AABBCC000000', value: 'AABBCC000000' },
				{ text: 'AABBCC000001', value: 'AABBCC000001' },
			];
		})
		.catch(error => console.error(error));

	await GET_UNIT_SETTING(controllInfo.value.cid)
		.then(res => {
			console.log(res.data);
		})
		.catch(error => console.error(error));
	await GET_UNIT_STATUS(controllInfo.value.cid)
		.then(res => {
			console.log(res.data);
		})
		.catch(error => console.error(error));
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
