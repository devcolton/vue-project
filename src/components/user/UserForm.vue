<script setup lang="ts">
import TheInput from '@/components/common/TheInput.vue';
import TheSelectbox from '@/components/common/TheSelectbox.vue';
import { onMounted, ref } from 'vue';
import type { UserInfo } from '@/interfaces/User.interface';
import type { OptionItem } from '@/interfaces/Component.interface';
import TheAlert from '@/components/common/TheAlert.vue';
import { ROLE } from '@/utils/Enum';
import { GET_USER, MOD_USER, REG_USER } from '@/apis/userApis';
import { stringIsEmpty } from '@/utils/common';
import type { AlertData } from '@/interfaces/Common.interface';

const props = defineProps<{
	isSetting: boolean;
	roleOptions?: Array<OptionItem>;
	upperOptions?: Array<OptionItem>;
	userId?: string;
}>();

const userName = ref<string>('');
const userInfo = ref<UserInfo>({
	role: '',
	superior: '',
	userId: '',
	name: '',
	phoneNumber: '',
	address: '',
	password: '',
	checkPassword: '',
});
const alertData = ref<AlertData>({ status: 'success', message: '' });
const alertRef = ref<InstanceType<typeof TheAlert> | null>(null);

onMounted(async () => {
	if (props.userId) {
		await GET_USER(props.userId)
			.then(res => {
				const result = res.data;

				userName.value = result.name;
				userInfo.value = {
					...userInfo.value,
					userId: result.userId,
					name: result.name,
					phoneNumber: result.phoneNumber,
					address: result.address,
					role: result.role,
					superior: result.superior || '',
				};
			})
			.catch(error => {
				console.error(error);
			});
	}
});

const handleChangeInput = async (name: string, value: string) => {
	userInfo.value = { ...userInfo.value, [name]: value };
};

const isValid = async () => {
	let result = true;
	const { role, password, checkPassword } = userInfo.value;

	for (const [key, value] of Object.entries(userInfo.value)) {
		if (key === 'role') {
			if (!props.isSetting && stringIsEmpty(value.trim())) {
				result = false;
				alertData.value = {
					status: 'warning',
					message: '권한을 선택해주세요.',
				};
				break;
			}
		} else if (key === 'superior') {
			if (role === ROLE.USER.code && stringIsEmpty(value.trim())) {
				result = false;
				alertData.value = {
					status: 'warning',
					message: '소속을 선택해주세요.',
				};
				break;
			}
		} else if (key === 'password') {
			if (
				(props.userId === '' || props.userId == undefined) &&
				stringIsEmpty(value.trim())
			) {
				result = false;
				alertData.value = {
					status: 'warning',
					message: '비밀번호를 입력해주세요.',
				};
				break;
			}
		} else if (key === 'checkPassword') {
			if (!stringIsEmpty(password) && stringIsEmpty(value.trim())) {
				result = false;
				alertData.value = {
					status: 'warning',
					message: '비밀번호확인을 입력해주세요.',
				};
				break;
			}
			if (!stringIsEmpty(password) && password !== checkPassword) {
				result = false;
				alertData.value = {
					status: 'warning',
					message: '비밀번호확인이 일치하지 않습니다.',
				};
				break;
			}
		} else {
			if (stringIsEmpty(value.trim())) {
				result = false;

				switch (key) {
					case 'userId':
						alertData.value = {
							status: 'warning',
							message: '아이디를 입력해주세요.',
						};
						break;
					case 'name':
						alertData.value = {
							status: 'warning',
							message: '사용자이름을 입력해주세요.',
						};
						break;
					case 'phoneNumber':
						alertData.value = {
							status: 'warning',
							message: '휴대폰번호를 입력해주세요.',
						};
						break;
					case 'address':
						alertData.value = {
							status: 'warning',
							message: '주소를 입력해주세요.',
						};
						break;

					default:
						break;
				}
				break;
			}
		}
	}

	return { result };
};

const submitRegist = async () => {
	const isValided = await isValid();

	if (isValided.result) {
		if (userInfo.value.role === ROLE.STAFF.code) {
			userInfo.value = { ...userInfo.value, superior: userInfo.value.userId };
		}

		return await REG_USER(userInfo.value)
			.then(res => {
				if (res.status === 201) {
					alertData.value = {
						status: 'success',
						message: '등록되었습니다.',
					};
					alertRef.value?.open();
				}

				return res;
			})
			.catch(error => {
				console.error(error);
			});
	} else {
		alertRef.value?.open();
	}
};
const submitModify = async () => {
	const isValided = await isValid();

	if (isValided.result) {
		return await MOD_USER(userInfo.value)
			.then(res => {
				if (res.status === 200) {
					const result = res.data;

					userName.value = result.name;
					userInfo.value = {
						...userInfo.value,
						userId: result.userId,
						name: result.name,
						phoneNumber: result.phoneNumber,
						address: result.address,
						role: result.role,
						superior: result.superior,
					};

					alertData.value = {
						status: 'success',
						message: '수정되었습니다.',
					};
					alertRef.value?.open();
				}

				return res;
			})
			.catch(error => {
				console.error(error);
			});
	} else {
		alertRef.value?.open();
	}
};

defineExpose({
	userInfo,
	submitRegist,
	submitModify,
});
</script>

<template>
	<div class="user-box">
		<div class="image-box">
			<div class="image-area">
				<img
					src="/Users/unid/devcolton/projects/vue-project/src/assets/images/default-avatar.jpg"
					alt="사용자 IMAGE"
				/>
			</div>
			<div v-if="isSetting" class="value-area">
				<p class="name">{{ userName }}</p>
				<!-- <p class="email">honggildong@naver.com</p> -->
			</div>
		</div>
		<div class="content-box">
			<form id="userForm">
				<div v-if="!isSetting" class="inline-group">
					<TheSelectbox
						labelName="권한"
						selectName="role"
						selectColor="dark"
						:value="userInfo.role"
						:optionItems="roleOptions || []"
						defaultOption="선택"
						@change="handleChangeInput"
					/>
					<TheSelectbox
						:disabled="userInfo.role !== ROLE.USER.code"
						labelName="소속"
						selectName="superior"
						selectColor="dark"
						:value="userInfo.superior"
						:optionItems="upperOptions || []"
						defaultOption="선택"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:disabled="userId != undefined && userId !== ''"
						inputType="text"
						inputName="userId"
						:value="userInfo.userId"
						labelName="아이디"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						inputType="text"
						inputName="name"
						:value="userInfo.name"
						labelName="사용자이름"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						inputType="text"
						inputName="phoneNumber"
						:value="userInfo.phoneNumber"
						:maxLength="13"
						labelName="휴대폰번호"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						inputType="text"
						inputName="address"
						:value="userInfo.address"
						labelName="주소"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.password"
						inputType="password"
						inputName="password"
						labelName="비밀번호"
						@change="handleChangeInput"
					/>
				</div>
				<div class="input-wrapper">
					<TheInput
						:value="userInfo.checkPassword"
						inputType="password"
						inputName="checkPassword"
						labelName="비밀번호확인"
						@change="handleChangeInput"
					/>
				</div>
			</form>
		</div>
	</div>
	<div v-if="isSetting" class="user-box">
		<div class="button-box">
			<TheButton btnName="btnUpdate" btnText="수정" @click="submitModify" />
		</div>
	</div>
	<slot />
	<teleport to="body">
		<TheAlert ref="alertRef" :status="alertData.status">
			<h3>{{ alertData.message }}</h3>
		</TheAlert>
	</teleport>
</template>

<style scoped>
#userForm {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.user-box {
	width: 100%;
	display: flex;
	flex-direction: user-box;
	justify-content: center;
	align-items: center;
}
.user-box:first-child {
	flex: 1 1 80%;
}

.image-box {
	flex: none;
	width: 280px;
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
	line-break: anywhere;
}

.email {
	font-size: 0.75rem;
	line-height: 1rem;
	color: rgba(156, 163, 175, 1);
}
</style>
