'use strict'
const inputTask = document.querySelector("#input-task")
const form = document.querySelector("form")
const currentUser = JSON.parse(getFromStorage("currentUser"))
const todoList = document.querySelector("#todo-list")

document.addEventListener('DOMContentLoaded', () => {
 if (currentUser && !localStorage.getItem("todoArr")) {
  setStorage("todoArr", "[]")
 }
 renderTodoList()
})

const renderTodoList = () => {
 todoList.innerHTML = ""
 const todoListOfOwner = window.todoArr.filter(item => item.owner === currentUser.username)
 todoListOfOwner.forEach(item => {
  const todoItem = `<li class="todo-item">${item.task}<span class="close">×</span></li>`
  todoList.insertAdjacentHTML('afterbegin', todoItem);
 });
}

const addItem = () => {
 inputTask.value = inputTask.value.trim()
 const isEmpty = isRequired([inputTask])
 if (!isEmpty) {
  const todoItem = new Todo({
   task: inputTask.value,
   owner: currentUser.username,
   isDone: false
  })
  window.todoArr.push(todoItem)
  saveTodos(window.todoArr)
  inputTask.value = ""
  renderTodoList()
 }
}

