<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue';
import TheUserForm from '@/components/TheUserForm.vue';
import TheButton from '@/components/common/TheButton.vue';
import TheModal from '@/components/common/TheModal.vue';
import { ref } from 'vue';

const showModal = ref(false);
function openModal() {
	showModal.value = true;
}
function closeModal() {
	showModal.value = false;
}
</script>

<template>
	<div class="content">
		<TheTitle />
		<TheModal
			v-if="showModal"
			title="사용자 등록"
			size="lg"
			@close="closeModal"
		>
			<TheUserForm :isSetting="false" />
		</TheModal>
		<TheButton btnName="modalopen" btnText="사용자 등록" @click="openModal" />
	</div>
</template>

<style scoped></style>
