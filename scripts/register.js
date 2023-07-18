'use strict'
const firstName = document.getElementById('input-firstname').value;
const lastName = document.getElementById('input-lastname').value;
const username = document.getElementById('input-username').value;
const password = document.getElementById('input-password').value;
const passwordConfirm = document.getElementById('input-password-confirm').value;

const isDuplicateUsername = (username) => {
 return window.userArr.some(item => item.username === username)
}

const isValidateForm = () => {
 if (!firstName || !lastName || !username || !password || !passwordConfirm) {
  alert('Vui lòng nhập đủ thông tin !')
  return false;
 }
 if (isDuplicateUsername(username)) {
  alert('username đã bị trùng, hãy nhập username mới!')
  return false;
 }
 if (password !== passwordConfirm) {
  alert('confirm password chưa đúng!')
  return false;
 }
 if (password.trim().length <= 8) {
  alert(' password phải nhiều hơn 8 ký tự!')
  return false;
 }

 return true
}

const register = () => {
 const userItem = new User({
  firstName: firstName,
  lastName: lastName,
  username: username,
  password: password,
 })
 if (!isValidateForm()) {
  window.userArr.push(userItem)
  saveUsers(window.userArr);
  alert("tạo thành công")
 }
}