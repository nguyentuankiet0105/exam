'use strict'

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
 let isRequired = false;
 listItem.forEach(item => {
  item.value = item.value.trim()
  if (!item.value) {
   showError(item, `Please enter ${item.name}`)
   isRequired = true
  } else {
   showSuccess(item)
  }
 })
 return isRequired
}

const checkLength = (item, min) => {
 item.value = item.value.trim()
 if (item.value.length <= min) {
  showError(item, `${item.name} must be more than ${min} characters`)
  return true
 }
 else {
  showSuccess(item)
  return false
 }
}

const checkMatchPassword = (passwordItem, cfmPasswordItem) => {
 if (passwordItem.value !== cfmPasswordItem.value) {
  showError(cfmPasswordItem, `${cfmPasswordItem.name} is incorrect !! `)
  return true
 }
 return false
}

const checkDuplicate = (input) => {
 input.value = input.value.trim()
 if (window.userArr.some(item => input.value === item.username)) {
  showError(input, `${input.name} is duplicate`)
  return true
 } else {
  showSuccess(input)
  return false
 }
}

const resetForm = (listItem) => {
 listItem.forEach(item => {
  item.value = ""
 })
} 
