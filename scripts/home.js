'use strict'

const loginModal = document.querySelector("#login-modal")
const mainContent = document.querySelector("#main-content")
const welcomeMessage = document.querySelector("#welcome-message")
const currentUser = JSON.parse(getFromStorage("currentUser"))

window.addEventListener('DOMContentLoaded', () => {
 if (currentUser) {
  loginModal.style.display = "none"
  const firstNameCurrent = window.userArr.find(item => item.username === currentUser.username).firstName
  welcomeMessage.innerText = `Welcome ${firstNameCurrent}`
 } else {
  mainContent.style.display = "none"
 }
})

function logout() {
 localStorage.removeItem("currentUser")
 mainContent.style.display = "none"
 loginModal.style.display = "block"
}
