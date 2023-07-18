'use strict'
class User {
 constructor({ firstName: firstName, lastName: lastName, username: username, password: password }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.username = username;
  this.password = password;
 }
}

const newUser = new User({ firstName: 'Tuan', lastName: 'Kiet', username: 'tuankiet', password: 'kiet@123' });
console.log("🚀 ~ file: User.js:12 ~ newUser:", newUser)
