<script setup lang="ts">
import { onMounted } from 'vue';
// import { storeToRefs } from 'pinia';
// import router from '@/router';
import { useUserStore } from '@/stores/user';
// import instance from '@/apis/utils/instance';
import TheInput from '@/components/common/TheInput.vue';
import TheCheckbox from '@/components/common/TheCheckbox.vue';
import TheButton from '@/components/common/TheButton.vue';

const store = useUserStore();
// const { user } = storeToRefs(store);
// const { getUser, setUser } = store;
const { setUser } = store;

// const loing = async () => {
// 	try {
// 		const res = await instance.get('api/v1/login');
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

onMounted(() => {});

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
				<TheInput inputType="text" inputName="id" labelName="아이디" />
			</div>
			<div class="input-group">
				<TheInput
					inputType="password"
					inputName="password"
					labelName="비밀번호"
				/>
			</div>
			<div class="checkbox-group">
				<TheCheckbox
					inputId="autoLogin"
					inputName="autoLogin"
					labelName="자동로그인"
				/>
				<TheCheckbox
					inputId="rememberId"
					inputName="rememberId"
					labelName="아이디저장"
				/>
			</div>
			<div class="input-group">
				<TheButton btnName="loginBtn" btnText="로그인" @click="setUser" />
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
