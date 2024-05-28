<script setup lang="ts">
import '@/assets/css/main.css';
import TheTitle from '@/components/TheTitle.vue';
import UserForm from '@/components/user/UserForm.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const userForm = ref<InstanceType<typeof UserForm> | null>(null);
const store = useUserStore();
const { user } = storeToRefs(store);
const { userId } = user.value;
</script>

<template>
	<div class="content">
		<TheTitle />
		<div class="wrap">
			<div class="setting">
				<UserForm ref="userForm" :userId="userId" :isSetting="true" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.setting {
	padding: 1rem 30rem;
	border: 1px solid white;
	border-radius: 0.5rem;
	margin: 3rem;
	display: flex;
	flex-direction: column;
	height: 100%;
}

@media screen and (max-width: 1440px) {
	.setting {
		padding: 1rem 10rem;
	}
}
@media screen and (max-width: 1024px) {
	.setting {
		padding: 1rem;
	}
}

.button-box {
	flex: 1 1 100%;
	display: flex;
	justify-content: flex-end;
	padding: 0.25rem;
}

.button-box button {
	width: 20%;
	margin: 0.25rem;
}
</style>
