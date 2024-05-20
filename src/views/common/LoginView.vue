<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
// import instance from '@/apis/utils/instance';
import TheInput from '@/components/common/TheInput.vue';
import TheCheckbox from '@/components/common/TheCheckbox.vue';
import TheButton from '@/components/common/TheButton.vue';
import type { LoginInfo } from '@/interfaces/Common.interface';
import { deleteCookie, getCookie, setCookie } from '@/utils/cookie';

const store = useUserStore();
const { setUser } = store;
const loginInfo = ref<LoginInfo>({
	id: '',
	password: '',
});
const isAutoLogin = ref<boolean>(false);
const isRememberId = ref<boolean>(false);
const remember = ref<InstanceType<typeof TheCheckbox> | null>(null);

onMounted(() => {
	const loginId = getCookie('rememberId');
	const autoLogin = getCookie('autoLogin');

	if (loginId) {
		loginInfo.value.id = loginId;
		isRememberId.value = true;
	}
	if (autoLogin) {
		isAutoLogin.value = true;
	}
});

const login = async () => {
	const { id, password } = loginInfo.value;
	setUser(id, password, 'ADMIN');
	if (remember.value?.el?.checked) {
		setCookie({
			key: 'rememberId',
			value: loginInfo.value.id,
			maxAge: 30,
		});
	}
	// await instance
	// 	.post('/auth/login/id', {}, { auth: { username: id, password: password } })
	// 	.then(res => {
	// 		if (res.data.status === 'success') {
	// 			if (remember.value?.el?.checked) {
	// 				setCookie({
	// 					key: 'rememberId',
	// 					value: loginInfo.value.id,
	// 					maxAge: 30,
	// 				});
	// 			}
	// 		}
	// 	})
	// 	.catch(e => console.log(e));
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

// const submitLogin: any = () => {
// 	router.push({ name: 'dashboard' });
// };
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
