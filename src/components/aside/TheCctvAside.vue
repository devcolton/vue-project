<script setup lang="ts">
import '@/assets/css/aside.css';
import TheInput from '@/components/common/TheInput.vue';
import TheButton from '@/components/common/TheButton.vue';
</script>

<template>
	<aside class="aside">
		<form id="cctvForm">
			<div class="input-group">
				<TheInput
					inputType="text"
					inputName="cctvName"
					labelName="카메라이름"
					labelColor="dark"
				/>
			</div>
			<div class="input-group">
				<TheInput
					inputType="text"
					inputName="ipNumber"
					labelName="IP번호"
					labelColor="dark"
				/>
			</div>
			<div class="input-group">
				<TheInput
					inputType="text"
					inputName="ipAddress"
					labelName="IP주소"
					labelColor="dark"
				/>
			</div>
			<div class="input-group">
				<TheInput
					inputType="text"
					inputName="cctvId"
					labelName="아이디"
					labelColor="dark"
				/>
			</div>
			<div class="input-group">
				<TheInput
					inputType="password"
					inputName="cctvPassword"
					labelName="비밀번호"
					labelColor="dark"
				/>
			</div>
			<div class="input-group">
				<TheButton btnName="addCctvBtn" btnText="추가하기" />
			</div>
		</form>
	</aside>
</template>

<style scoped>
#cctvForm {
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>
