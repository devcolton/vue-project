<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import TheInput from '@/components/common/TheInput.vue';
import TheCheckbox from '@/components/common/TheCheckbox.vue';
import TheButton from '@/components/common/TheButton.vue';
import type { LoginInfo } from '@/interfaces/Common.interface';
import { deleteCookie, getCookie, setCookie } from '@/utils/cookie';
import { LOGIN } from '@/apis/commonApis';
import router from '@/router';
import { GET_USER } from '@/apis/userApis';
import { stringIsEmpty } from '@/utils/common';

const store = useUserStore();
const { user, setUser } = store;
const loginInfo = ref<LoginInfo>({
	id: '',
	password: '',
});
const isAutoLogin = ref<boolean>(false);
const isRememberId = ref<boolean>(false);
const remember = ref<InstanceType<typeof TheCheckbox> | null>(null);
const auto = ref<InstanceType<typeof TheCheckbox> | null>(null);

onMounted(async () => {
	const loginId = getCookie('rememberId');
	const autoLogin = getCookie('autoLogin');

	if (loginId) {
		loginInfo.value.id = loginId;
		isRememberId.value = true;
	}
	if (autoLogin) {
		isAutoLogin.value = true;
		loginInfo.value = JSON.parse(autoLogin);
		const { id, password } = loginInfo.value;
		const res = await LOGIN({ username: id, password });
		if (res.status === 200 || res.status === 201) {
			const { accessToken, refreshToken } = res.data;
			await setUser({
				...user,
				accessToken,
				refreshToken,
			});

			return router.replace('dashboard');
		}
	}
});

const isValid = async () => {
	let result = true;
	let msg = '';

	for (const [key, value] of Object.entries(loginInfo.value)) {
		if (stringIsEmpty(value.trim())) {
			result = false;

			switch (key) {
				case 'id':
					msg = '아이디를 입력해주세요.';
					break;
				case 'password':
					msg = '비밀번호를 입력해주세요';
					break;

				default:
					break;
			}

			return alert(msg);
		}
	}

	return result;
};
const login = async () => {
	if (await isValid()) {
		const { id, password } = loginInfo.value;

		await LOGIN({ username: id, password })
			.then(async res => {
				if (res.status === 200 || res.status === 201) {
					const { accessToken, refreshToken } = res.data;
					const user = await GET_USER(id);

					setUser({
						userId: user.data.userId,
						role: user.data.role,
						accessToken,
						refreshToken,
					});
					if (remember.value?.el?.checked) {
						setCookie({
							key: 'rememberId',
							value: id,
							maxAge: 30,
						});
					}
					if (auto.value?.el?.checked) {
						setCookie({
							key: 'autoLogin',
							value: JSON.stringify({
								id: id,
								password: password,
							}),
							maxAge: 30,
						});
					}

					router.push({ name: 'dashboard' });
				}
			})
			.catch(error => {
				console.log(error);
				alert(error.response.data.message);
			});
	}
};
const handleInput = async (name: string, value: string) => {
	loginInfo.value = { ...loginInfo.value, [name]: value };
};
const handleAutoLogin = async (event: Event) => {
	const { checked } = event.target as HTMLInputElement;

	if (checked) {
		setCookie({ key: 'autoLogin', value: 'true', maxAge: 30 });
	} else {
		deleteCookie('autoLogin');
	}
};
const handleRememberId = async (event: Event) => {
	const { checked } = event.target as HTMLInputElement;

	if (!checked) {
		deleteCookie('rememberId');
	}
};
</script>

<template>
	<div class="loginContainer">
		<form id="loginForm">
			<div class="input-group">
				<h1>Dream Farm Logo</h1>
			</div>
			<div class="input-group">
				<TheInput
					:value="loginInfo.id"
					inputType="text"
					inputName="id"
					labelName="아이디"
					@change="handleInput"
				/>
			</div>
			<div class="input-group">
				<TheInput
					:value="loginInfo.password"
					inputType="password"
					inputName="password"
					labelName="비밀번호"
					@change="handleInput"
				/>
			</div>
			<div class="checkbox-group">
				<TheCheckbox
					ref="auto"
					:checked="isAutoLogin"
					inputId="autoLogin"
					inputName="autoLogin"
					labelName="자동로그인"
					@change="handleAutoLogin"
				/>
				<TheCheckbox
					ref="remember"
					:checked="isRememberId"
					inputId="rememberId"
					inputName="rememberId"
					labelName="아이디저장"
					@change="handleRememberId"
				/>
			</div>
			<div class="input-group">
				<TheButton btnName="loginBtn" btnText="로그인" @click="login" />
			</div>
		</form>
	</div>
</template>

<style scoped>
.loginContainer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 35rem;
	padding: 10px;
}

#loginForm {
	display: flex;
	flex-direction: column;
	width: 100%;
}

#loginForm h1 {
	color: #fff;
	text-align: center;
}

.checkbox-group {
	display: flex;
	justify-content: center;
	margin: 5px;
	padding: 5px;
}

@media screen and (max-width: 1440px) {
	.container {
		width: 30rem;
	}
}

@media screen and (max-width: 768px) {
	.container {
		width: 25rem;
	}
}

@media screen and (max-width: 425px) {
	.container {
		width: 20rem;
	}
	.checkbox-group {
		flex-direction: column;
		align-items: self-start;
	}
}
</style>
