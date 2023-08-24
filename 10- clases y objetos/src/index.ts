import { User } from "./users.model";

const userObject = new User(null, null, null);
userObject.age = 18;
console.log(userObject);
userObject.login('Axity2023', 'test@test.com');
userObject.logout();