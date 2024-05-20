<script setup lang="ts">
import TheInput from '@/components/common/TheInput.vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import { ref } from 'vue';
import type { UserInfo } from '@/interfaces/Common.interface';

defineProps<{
	isSetting: boolean;
}>();

const optionItems = ref([
	{ value: 'admin', text: '관리자' },
	{ value: 'coperation', text: '중간관리자' },
	{ value: 'user', text: '사용자' },
]);
const userInfo = ref<UserInfo>({
	userType: 'admin',
	upperUser: 'user',
	userName: '',
	userPhone: '',
	userEmail: '',
	userPassword: '',
	checkPassword: '',
});
const handleChangeInput = async (name: string, value: string) => {
	userInfo.value = { ...userInfo.value, [name]: value };
};
defineExpose({
	userInfo,
});
</script>

<template>
	<div class="row">
		<div class="image-box">
			<div class="image-area">
				<img
					src="/Users/unid/devcolton/projects/vue-project/src/assets/images/default-avatar.jpg"
					alt="사용자 IMAGE"
				/>
			</div>
			<div v-if="isSetting" class="value-area">
				<p class="name">홍길동님</p>
				<p class="email">honggildong@naver.com</p>
			</div>
		</div>
		<div class="content-box">
			<form id="userForm">
				<div v-if="!isSetting" class="inline-group">
					<TheSelectbox
						selectName="userType"
						selectColor="dark"
						:value="userInfo.userType"
						:optionItems="optionItems"
						@change="handleChangeInput"
					/>
					<TheSelectbox
						selectName="upperUser"
						selectColor="dark"
						:value="userInfo.upperUser"
						:optionItems="optionItems"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.userName"
						inputType="text"
						inputName="userName"
						labelName="사용자이름"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.userPhone"
						inputType="text"
						inputName="userPhone"
						labelName="휴대폰번호"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.userEmail"
						inputType="text"
						inputName="userEmail"
						labelName="이메일주소"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.userPassword"
						inputType="password"
						inputName="userPassword"
						labelName="비밀번호"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.checkPassword"
						inputType="password"
						inputName="userPasswordCheck"
						labelName="비밀번호확인"
						@change="handleChangeInput"
					/>
				</div>
			</form>
		</div>
	</div>
	<slot />
	<!-- <form id="userForm">
		<div class="input-group">
			<TheSelectbox selectName="userType" :optionItmes="optionItems" />
		</div>
		<div class="input-group">
			<TheSelectbox selectName="upperUser" :optionItmes="optionItems" />
		</div>
		<div class="input-group">
			<TheInput
				inputType="text"
				inputName="userName"
				labelName="사용자이름"
				labelColor="dark"
			/>
		</div>
		<div class="input-group">
			<TheInput
				inputType="text"
				inputName="userEmail"
				labelName="Email"
				labelColor="dark"
			/>
		</div>
		<div class="input-group">
			<TheInput
				inputType="text"
				inputName="userPhone"
				labelName="전화번호"
				labelColor="dark"
			/>
		</div>
		<div class="input-group">
			<TheInput
				inputType="text"
				inputName="userId"
				labelName="아이디"
				labelColor="dark"
			/>
		</div>
		<div class="input-group">
			<TheInput
				inputType="password"
				inputName="userPassword"
				labelName="비밀번호"
				labelColor="dark"
			/>
		</div>
	</form> -->
</template>

<style scoped>
#userForm {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.row {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.row:first-child {
	flex: 1 1 80%;
}

.image-box {
	flex: 1 1 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-gap: 1rem;
	gap: 1rem;
}
.content-box {
	flex: 1 1 70%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.content-box form {
	width: 100%;
}
.input-wrapper {
	margin: 0.5rem;
}
.button-box {
	flex: 1 1 100%;
	display: flex;
	justify-content: flex-end;
}

.button-box button {
	width: 20%;
	margin: 0.25rem;
}

.image-area {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 8rem;
	width: 8rem;
	border-radius: 50%;
	background-color: #fff;
}
.image-area img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}
.value-area {
	height: 7rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.name {
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
}

.email {
	font-size: 0.75rem;
	line-height: 1rem;
	color: rgba(156, 163, 175, 1);
}
</style>
