<script setup lang="ts">
import { ref } from 'vue';
import TheSearchBox from '@/components/TheSearchBox.vue';
import TheBottomBox from '@/components/TheBottomBox.vue';
import TheTitle from '@/components/TheTitle.vue';
import TheUserForm from '@/components/TheUserForm.vue';
import TheModal from '@/components/common/TheModal.vue';
import TheButton from '@/components/common/TheButton.vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import type { OptionItem } from '@/interfaces/Common.interface';

const userForm = ref<InstanceType<typeof TheUserForm> | null>(null);
const showModal = ref(false);
const searchParams = ref({
	role: '',
});
const roleOptionItems = ref<Array<OptionItem>>([
	{
		value: 'admin',
		text: '최고관리자',
	},
	{
		value: 'sub',
		text: '중간관리자',
	},
	{
		value: 'user',
		text: '사용자',
	},
]);
const tableData = ref([
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
]);
const openModal = () => {
	showModal.value = true;
};
const closeModal = () => {
	showModal.value = false;
};
const registUser = () => {
	console.log(userForm.value?.userInfo);
};
const handleChangeInput = async (name: string, value: string) => {
	searchParams.value = { ...searchParams.value, [name]: value };
};
const searchList = async () => {
	console.log('search');
};
</script>

<template>
	<div class="content">
		<TheTitle />
		<div class="wrap">
			<div class="setting">
				<TheSearchBox :slotList="['role', 'search']">
					<template #role>
						<TheSelectbox
							selectName="role"
							:value="searchParams.role"
							:optionItems="roleOptionItems"
							:defaultOption="true"
							@change="handleChangeInput"
						/>
					</template>
					<template #search>
						<TheButton btnName="modalopen" btnText="검색" @click="searchList" />
					</template>
				</TheSearchBox>
				<el-table :data="tableData" stripe style="width: 100%" height="580">
					<el-table-column prop="date" label="Date" width="180">
					</el-table-column>
					<el-table-column prop="name" label="Name" width="180">
					</el-table-column>
					<el-table-column prop="address" label="Address"> </el-table-column>
				</el-table>
				<TheBottomBox :slotList="['del', 'mod', 'reg']">
					<template #del>
						<TheButton
							btnName="modalopen"
							btnColor="danger"
							btnText="삭제"
							@click="openModal"
						/>
					</template>
					<template #mod>
						<TheButton
							btnName="modalopen"
							btnColor="warning"
							btnText="수정"
							@click="openModal"
						/>
					</template>
					<template #reg>
						<TheButton
							btnName="modalopen"
							btnColor="border"
							btnText="등록"
							@click="openModal"
						/>
					</template>
				</TheBottomBox>
			</div>
		</div>
		<TheModal
			v-if="showModal"
			title="사용자 등록"
			size="lg"
			@close="closeModal"
			@click="registUser"
		>
			<TheUserForm ref="userForm" :isSetting="false" />
		</TheModal>
	</div>
</template>

<style scoped></style>
