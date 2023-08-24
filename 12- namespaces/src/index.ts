import { MySQL } from "./mysql";
import { Postgres } from "./postgres";
import { System } from "./system";

function createUsersInAllDatabases(): void {
    const user = new MySQL.User();
    MySQL.craeteUser(user);

    const userPostgress = new Postgres.User(Postgres.UserType.admin);
    Postgres.craeteUser(userPostgress);
    System.out.print("hola desde el index");
}
createUsersInAllDatabases();