<script setup lang="ts">
defineProps<{
	toggleId: string;
	toggleLtext: string;
	toggleRtext: string;
	toggleColor?: string;
}>();
</script>

<template>
	<input :id="toggleId" type="checkbox" class="basic-toggle" />
	<div class="checkbox">
		<label :class="'slide ' + toggleColor" :for="toggleId">
			<label class="toggle-bar" :for="toggleId"></label>
			<label class="toggle-text" :for="toggleId">{{ toggleLtext }}</label>
			<label class="toggle-text" :for="toggleId">{{ toggleRtext }}</label>
		</label>
	</div>
</template>

<style scoped>
.checkbox {
	width: 130px;
	height: 40px;
	background-color: #d0d0d0;
	border-radius: 30px;
	position: relative;
	color: black;
	overflow: hidden;
}

.basic-toggle {
	display: none;
}

.checkbox .toggle-bar {
	width: 60px;
	height: 30px;
	position: absolute;
	border-radius: 30px;
	left: 5px;
	cursor: pointer;
	transition: 0.4s;
	background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
	box-shadow:
		-0px -0px 10px #8983f7,
		-0px -0px 3px #8983f7;
}

.checkbox .slide {
	width: 130px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	background-color: #1a413d;
	color: #fff;
}

.checkbox .slide.dark {
	background-color: #082622;
}

.checkbox .slide .toggle-text {
	font-size: 16px;
	font-weight: 700;
	z-index: 100;
	cursor: pointer;
}

.basic-toggle:checked + .checkbox .slide .toggle-bar {
	transform: translateX(62px);
	background: linear-gradient(40deg, #ff0080, #ff8c00 70%);

	box-shadow:
		0px 0px 3px rgb(255, 255, 20),
		0px 0px 5px rgb(255, 255, 20);
}
</style>
