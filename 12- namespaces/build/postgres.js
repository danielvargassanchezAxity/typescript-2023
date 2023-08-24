"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postgres = void 0;
var Postgres;
(function (Postgres) {
    class User {
        constructor(userType) {
            this.name = '';
            this.id = 0;
            this.password = '';
            this.userType = userType;
        }
    }
    Postgres.User = User;
    function craeteUser(user) {
        console.log("user created from Postgress");
    }
    Postgres.craeteUser = craeteUser;
    let UserType;
    (function (UserType) {
        UserType[UserType["admin"] = 0] = "admin";
        UserType[UserType["generic"] = 1] = "generic";
        UserType[UserType["default"] = 2] = "default";
    })(UserType = Postgres.UserType || (Postgres.UserType = {}));
})(Postgres || (exports.Postgres = Postgres = {}));
