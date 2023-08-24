"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("./users.model");
const userObject = new users_model_1.User(null, null, null);
userObject.age = 18;
console.log(userObject);
userObject.login('Axity2023', 'test@test.com');
userObject.logout();
