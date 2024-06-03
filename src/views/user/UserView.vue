<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheSearchBox from '@/components/TheSearchBox.vue';
import TheBottomBox from '@/components/TheBottomBox.vue';
import TheTitle from '@/components/TheTitle.vue';
import UserForm from '@/components/user/UserForm.vue';
import TheModal from '@/components/common/TheModal.vue';
import TheButton from '@/components/common/TheButton.vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import type { OptionItem } from '@/interfaces/Component.interface';
import { DEL_USERS, GET_USERS } from '@/apis/userApis';
import { ROLE } from '@/utils/Enum';
import type { UserInfo, UserItem } from '@/interfaces/User.interface';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import TheInput from '@/components/common/TheInput.vue';

const userForm = ref<InstanceType<typeof UserForm> | null>(null);
const showModal = ref(false);
const searchParams = ref({
	role: '',
	superior: '',
	keyword: '',
});
const roleOptionItems = ref<Array<OptionItem>>([]);
const upperOptionItems = ref<Array<OptionItem>>([]);
const tableData = ref<Array<UserItem>>([]);
const multipleSelection = ref<string[]>([]);
const selectedUser = ref<string>('');

const store = useUserStore();
const { user } = storeToRefs(store);
const { role } = user.value;

onMounted(async () => {
	if (role === ROLE.STAFF.code) {
		Object.values(ROLE)
			.filter(v => v.code != ROLE.ADMIN.code)
			.forEach(item => {
				roleOptionItems.value.push({ text: item.name, value: item.code });
			});
	} else {
		Object.values(ROLE).forEach(item => {
			roleOptionItems.value.push({ text: item.name, value: item.code });
		});
	}

	getSuperiors();
	searchList();
});

const openModal = () => {
	showModal.value = true;
};
const closeModal = () => {
	selectedUser.value = '';
	showModal.value = false;
};
const handleClickEvent = async () => {
	if (selectedUser.value === '') {
		await registUser();
	} else {
		await modifyUser();
	}
};
const registUser = async () => {
	await userForm.value
		?.submitRegist()
		.then(res => {
			if (res) {
				if (res.status === 201) {
					showModal.value = false;
					searchList();
				} else if (res.data.status === 'fail') {
					alert(res.data.message);
				}
			}
		})
		.catch(error => {
			console.error(error);
		});
};
const modifyUser = async () => {
	await userForm.value
		?.submitModify()
		.then(res => {
			if (res) {
				if (res.status === 200) {
					showModal.value = false;
					searchList();
				} else if (res.data.status === 'fail') {
					alert(res.data.message);
				}
			}
		})
		.catch(error => {
			console.error(error);
		});
};
const deleteUsers = async () => {
	if (multipleSelection.value.length < 1) {
		return alert('선택된 항목이 없습니다.');
	}

	if (confirm('삭제하시겠습니까?')) {
		await DEL_USERS(user.value.userId, multipleSelection.value)
			.then(res => {
				if (res.status === 200) {
					alert('삭제되었습니다.');
					searchList();
				}
			})
			.catch(error => {
				console.error(error);
			});
	}
};
const handleChangeInput = async (name: string, value: string) => {
	searchParams.value = { ...searchParams.value, [name]: value };
};
const searchList = async () => {
	await GET_USERS(user.value.userId, searchParams.value)
		.then(res => {
			tableData.value = res.data;
		})
		.catch(error => {
			console.error(error);
		});
};
const getSuperiors = async () => {
	await GET_USERS(user.value.userId, { role: 'STAFF' })
		.then(res => {
			const result = res.data;
			result.forEach((el: UserInfo) => {
				upperOptionItems.value.push({ text: el.name, value: el.userId });
			});
		})
		.catch(error => {
			console.error(error);
		});
};
const handleSelectionChange = (val: UserInfo[]) => {
	multipleSelection.value = val.map(item => item.userId);
};
const handleCurrentChange = (val: UserInfo) => {
	selectedUser.value = val?.userId || '';
	openModal();
};
</script>

<template>
	<div class="content">
		<TheTitle />
		<TheSearchBox :slotList="['role', 'superior', 'keyword', 'search']">
			<template #role>
				<TheSelectbox
					labelName="권한"
					selectName="role"
					:value="searchParams.role"
					:optionItems="roleOptionItems"
					selectColor="dark"
					defaultOption="전체"
					@change="handleChangeInput"
				/>
			</template>
			<template #superior>
				<TheSelectbox
					labelName="소속"
					selectName="superior"
					:value="searchParams.superior"
					:optionItems="upperOptionItems"
					selectColor="dark"
					defaultOption="전체"
					@change="handleChangeInput"
				/>
			</template>
			<template #keyword>
				<TheInput
					inputType="text"
					inputName="keyword"
					:value="searchParams.keyword"
					@change="handleChangeInput"
				/>
			</template>
			<template #search>
				<TheButton
					btnName="modalopen"
					btnColor="border"
					btnText="검색"
					@click="searchList"
				/>
			</template>
		</TheSearchBox>
		<div class="rwrap">
			<el-table
				ref="multipleTable"
				:data="tableData"
				stripe
				height="100%"
				width="100%"
				@selection-change="handleSelectionChange"
				@row-click="handleCurrentChange"
			>
				<el-table-column type="selection" width="100" align="center">
				</el-table-column>
				<el-table-column prop="role" label="권한" align="center">
				</el-table-column>
				<el-table-column prop="superior" label="소속" align="center">
				</el-table-column>
				<el-table-column prop="userId" label="아이디" align="center">
				</el-table-column>
				<el-table-column prop="name" label="이름" align="center">
				</el-table-column>
				<el-table-column prop="phoneNumber" label="휴대폰번호" align="center">
				</el-table-column>
				<el-table-column prop="address" label="주소" align="left">
				</el-table-column>
			</el-table>
		</div>
		<TheBottomBox :slotList="['del', 'reg']">
			<template #del>
				<TheButton
					btnName="modalopen"
					btnColor="danger"
					btnText="삭제"
					@click="deleteUsers"
				/>
			</template>
			<template #reg>
				<TheButton
					btnName="modalopen"
					btnColor="primary"
					btnText="등록"
					@click="openModal"
				/>
			</template>
		</TheBottomBox>
	</div>
	<TheModal
		v-if="showModal"
		:title="'사용자' + (selectedUser === '' ? '등록' : '수정')"
		:btnName="selectedUser === '' ? '등록' : '수정'"
		size="lg"
		@close="closeModal"
		@click="handleClickEvent"
	>
		<UserForm
			ref="userForm"
			:userId="selectedUser"
			:roleOptions="roleOptionItems"
			:upperOptions="upperOptionItems"
			:isSetting="false"
		/>
	</TheModal>
</template>

<style scoped></style>
