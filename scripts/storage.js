'use strict'
const getFromStorage = (key) => {
 return `${localStorage.getItem(key)}`
}
const setStorage = (key, value) => {
 localStorage.setItem(key, value)
}

const KEY = "USER_ARRAY";
window.userArr = JSON.parse(getFromStorage(KEY)) || [];
window.todoArr = JSON.parse(getFromStorage("todoArr")) || [];

const saveUsers = (users) => {
 setStorage(KEY, JSON.stringify(users))
}

const saveTodos = (todoItem) => {
 setStorage("todoArr", JSON.stringify(todoItem))
}

const getUsers = () => {
 return userArr = JSON.parse(getFromStorage(KEY)) || []
}

window.addEventListener('DOMContentLoaded', () => {
 if (!localStorage.getItem(KEY)) {
  setStorage("KEY", "USER_ARRAY")
  setStorage("USER_ARRAY", "[]")
 }
 getUsers()
})


