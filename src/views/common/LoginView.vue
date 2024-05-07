<script setup lang="ts">
import router from '@/router'

const submitLogin = () => {
  router.push({name: 'dashboard'})
}
</script>

<template>
  <div class="container">
    <form id="loginForm">
      <div class="input-group">
        <h1>Dream Farm Logo</h1>
      </div>
      <div class="input-group">
        <input required="true" type="text" name="id" autocomplete="off" class="input" />
        <label class="user-label">아이디</label>
      </div>
      <div class="input-group">
        <input required="true" type="password" name="password" autocomplete="off" class="input" />
        <label class="user-label">비밀번호</label>
      </div>
      <div class="inline-group">
        <label class="custom-label">
          <input type="checkbox" class="custom-checkbox" />
          자동 로그인
        </label>
        <label class="custom-label">
          <input type="checkbox" class="custom-checkbox" />
          아이디 저장
        </label>
      </div>
      <div class="input-group">
        <button type="button" name="loginBtn" class="custom-btn" @click="submitLogin">로그인</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
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
}

#loginForm h1 {
  color: #fff;
  text-align: center;
}

.input-group {
  width: 100%;
  position: relative;
  align-self: center;
  margin: 5px;
  padding: 5px;
}

.input {
  width: 100%;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-label {
  position: absolute;
  left: 2rem;
  color: #d9ef97;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
  outline: none;
  border: 1.5px solid #d9ef97;
}

.input:focus ~ label,
input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #1a413d;
  padding: 0 0.2em;
  color: #d9ef97;
}

.inline-group {
  display: flex;
  justify-content: center;
  margin: 5px;
  padding: 5px;
}

.custom-label {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  margin: 0 10px;
}

/* Style for the custom checkbox */
.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #d9ef97;
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
}

/* Style for the custom checkmark */
.custom-checkbox::before {
  content: "";
  background-color: #d9ef97;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.custom-checkbox:checked:before {
  transform: translate(-50%, -50%) scale(1);
}

.custom-btn {
  font-family:
    PlusJakartaSans,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Cantarell,
    Helvetica Neue,
    Ubuntu,
    sans-serif;
  font-size: 1rem;
  align-items: center;
  height: 48px;
  border-radius: 0.4rem;
  font-weight: 600;
  padding: 0 1.2rem;
  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem rgba(143, 142, 142, 0.15) !important;
  background: #d9ef97;
  width: 100%;
}

.custom-btn:hover {
  background: #000;
  color: #d9ef97;
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
  .inline-group {
    flex-direction: column;
    align-items: self-start;
  }
}
</style>
