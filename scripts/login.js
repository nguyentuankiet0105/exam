'use strict'
const username = document.querySelector("#input-username")
const password = document.querySelector("#input-password")
const form = document.querySelector('form')
const loginMessage = document.querySelector('.login-message')

const isValid = () => {
 const isEmpty = isRequired([username, password])
 if (!isEmpty) {
  return true
 }
 return false
}

const showMessage = (isLogin) => {
 if (isLogin) {
  loginMessage.classList.add("success")
  loginMessage.innerText = "Logged in successfully !!!"
 } else {
  loginMessage.classList.remove("success")
  loginMessage.classList.add("error")
  loginMessage.innerText = "Please check the information again"
  loginMessage.style.display = "flex";
  loginMessage.style.justifyContent = "center";
 }
}

const login = () => {
 username.value = username.value.trim();
 password.value = password.value.trim();
 if (isValid()) {
  const isLogin = window.userArr.find(item => username.value === item.username && password.value === item.password)
  if (isLogin) {
   const currentUser = {
    username: username.value,
    password: password.value
   }
   setStorage("currentUser", JSON.stringify(currentUser))
   showMessage(isLogin)
  } else {
   showMessage(isLogin)
  }
 }
}

form.addEventListener('submit', (e) => {
 e.preventDefault()
 login()
})