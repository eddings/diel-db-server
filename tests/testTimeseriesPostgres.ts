import { resolve } from "path";
import { StartDielDbServer, DbDriver } from "../src";
import { PostgresDbConfig, SqliteDbConfig } from "../src/types";

const dbName = "sensors";
const user = "Lucie";

function runWithPostgres() {
  console.log("\x1b[43m", `Connecting to Postgres Local. dbName: ${dbName} user: ${user}`, "\x1b[0m");
  const postgresDbConfig: PostgresDbConfig = {
    dbName, // yifan's local test, hacky
    driver: DbDriver.Postgres,
    user,
    host: "localhost",
    port: 5432,
  };
  StartDielDbServer([postgresDbConfig]);
}

runWithPostgres();
