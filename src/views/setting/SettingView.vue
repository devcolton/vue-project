<script setup lang="ts">
import '@/assets/css/main.css';
import TheTitle from '@/components/TheTitle.vue';
import TheUserForm from '@/components/TheUserForm.vue';
import { ref } from 'vue';

const userForm = ref<InstanceType<typeof TheUserForm> | null>(null);
const submitUpdate = () => {
	console.log(userForm.value?.userInfo);
};
</script>

<template>
	<div class="content">
		<TheTitle />
		<div class="wrap">
			<div class="setting">
				<TheUserForm ref="userForm" :isSetting="true">
					<div class="row">
						<div class="button-box">
							<TheButton
								btnName="btnUpdate"
								btnText="수정"
								@click="submitUpdate"
							/>
						</div>
					</div>
				</TheUserForm>
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

/* .wrapper div {
	margin: 0.5rem;
}

.wrapper .row {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.wrapper .row:first-child {
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
	margin: 0.25rem;
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
} */
</style>
