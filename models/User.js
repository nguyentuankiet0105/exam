'use strict'
class User {
 constructor({ firstName: firstName, lastName: lastName, username: username, password: password }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.username = username;
  this.password = password;
 }
}

class Todo {
 constructor({ task: task, owner: owner, isDone: isDone }) {
  this.task = task;
  this.owner = owner;
  this.isDone = isDone;
 }
}

