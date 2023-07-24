'use strict'
const inputPageSize = document.querySelector("#input-page-size");
const inputCategory = document.querySelector("#input-category")
const loginMessage = document.querySelector('.login-message')

window.addEventListener("DOMContentLoaded", () => {
 inputCategory.value = settings.category
 inputPageSize.value = settings.pageSize
})

const submitSetting = () => {
 setStorage("settings", JSON.stringify({ category: inputCategory.value, pageSize: inputPageSize.value.trim() }))
 loginMessage.classList.add("success")
 loginMessage.innerText = "Settings Successfuly"
 setTimeout(() => {
  loginMessage.innerText = ""
  window.location.href = '../pages/news.html';
 }, 700)
}
