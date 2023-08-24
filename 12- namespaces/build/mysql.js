"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQL = void 0;
var MySQL;
(function (MySQL) {
    class User {
        constructor() {
            this.name = '';
            this.uuid = '';
            this.password = '';
        }
    }
    MySQL.User = User;
    function craeteUser(user) {
        console.log("user created from MySQL");
    }
    MySQL.craeteUser = craeteUser;
})(MySQL || (exports.MySQL = MySQL = {}));
