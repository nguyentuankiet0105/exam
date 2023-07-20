'use strict'
const firstName = document.querySelector('#input-firstname');
const lastName = document.querySelector('#input-lastname');
const username = document.querySelector('#input-username');
const password = document.querySelector('#input-password');
const passwordConfirm = document.querySelector('#input-password-confirm');
const form = document.querySelector('form')

const showError = (input, message) => {
 let parent = input.parentElement
 let small = parent.querySelector('small')
 parent.classList.add('error')
 small.innerText = message
}
const showSuccess = (input) => {
 let parent = input.parentElement
 let small = parent.querySelector('small')
 parent.classList.remove('error')
 small.innerText = ""
}

const isRequired = (listItem) => {
 listItem.forEach(item => {
  item.value = item.value.trim()

  if (!item.value) {
   showError(item, "Vui long nhap thong tin")
  } else {
   showSuccess(item)
  }
 })
}

form.addEventListener("submit", function (e) {
 e.preventDefault()
 isRequired([firstName, lastName, username, password, passwordConfirm])
})

// const register = () => {
//  const userItem = new User({
//   firstName: firstName,
//   lastName: lastName,
//   username: username,
//   password: password,
//  })
//  window.userArr.push(userItem)
//  saveUsers(window.userArr);
// }