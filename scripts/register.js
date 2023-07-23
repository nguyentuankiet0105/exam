'use strict'
const firstName = document.querySelector('#input-firstname');
const lastName = document.querySelector('#input-lastname');
const username = document.querySelector('#input-username');
const password = document.querySelector('#input-password');
const passwordConfirm = document.querySelector('#input-password-confirm');
const form = document.querySelector('form')
let successText = document.querySelector('.success')

const formRegisterInput = [firstName, lastName, username, password, passwordConfirm]

const isvalid = () => {
 const isEmpty = isRequired(formRegisterInput)
 if (!isEmpty) {
  if (checkLength(password, 8) ||
   checkMatchPassword(password, passwordConfirm) ||
   checkDuplicate(username)) {
   return false
  }
  return true
 }
 return false
}

const register = () => {
 const userItem = new User({
  firstName: firstName.value,
  lastName: lastName.value,
  username: username.value,
  password: password.value,
 })
 if (isvalid()) {
  window.userArr.push(userItem)
  saveUsers(window.userArr);
  resetForm(formRegisterInput)
  successText.innerText = "Successfully !!!!"
  setTimeout(() => {
   successText.innerText = ""
   window.location.href = '../pages/login.html';
  }, 1200)
 }
}

form.addEventListener("submit", function (e) {
 e.preventDefault()
 register()
})
