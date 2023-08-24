"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("./mysql");
const postgres_1 = require("./postgres");
const system_1 = require("./system");
function createUsersInAllDatabases() {
    const user = new mysql_1.MySQL.User();
    mysql_1.MySQL.craeteUser(user);
    const userPostgress = new postgres_1.Postgres.User(postgres_1.Postgres.UserType.admin);
    postgres_1.Postgres.craeteUser(userPostgress);
    system_1.System.out.print("hola desde el index");
}
createUsersInAllDatabases();
