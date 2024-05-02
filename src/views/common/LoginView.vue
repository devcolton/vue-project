<template>
  <div class="popup">
    <form id="loginForm">
      <h1>Dream Farm Logo</h1>
      <div class="input-group">
        <input required="true" type="text" name="id" autocomplete="off" class="input" />
        <label class="user-label">아이디</label>
      </div>
      <div class="input-group">
        <input required="true" type="password" name="password" autocomplete="off" class="input" />
        <label class="user-label">비밀번호</label>
      </div>
      <div class="check-group">
        <label class="custom-label">
          <input type="checkbox" class="input" />
          <span class="custom-checkbox"></span>
          자동 로그인
        </label>
        <label class="custom-label">
          <input type="checkbox" class="input" />
          <span class="custom-checkbox"></span>
          아이디 저장
        </label>
      </div>
      <button type="button" name="loginBtn" class="btn">로그인</button>
    </form>
  </div>
</template>

<style scoped>
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 250px;
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
  position: relative;
  margin: 5px;
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
  left: 15px;
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

.check-group {
  display: flex;
  align-self: center;
  margin: 5px;
  padding: 5px;
}

.input[type='checkbox'] {
  display: none;
}

.custom-label {
  color: #fff;
}

/* Style for the custom checkbox */
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #d9ef97;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}

/* Style for the custom checkmark */
.custom-checkbox::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #d9ef97;
  border-radius: 2px;
  opacity: 0;
}

/* Show the checkmark when checkbox is checked */
.input[type='checkbox']:checked + .custom-checkbox::after {
  opacity: 1;
}

button {
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
}

button:hover {
  background: #000;
  color: #d9ef97;
}
</style>
