import { resolve } from "path";
import { StartDielDbServer, DbDriver } from "../src";
import { SqliteDbConfig } from "../src/types";

const dbName = "sensors";

function runWithSqlite() {
  console.log("\x1b[43m", `Connecting to Sqlite. dbName: ${dbName}`, "\x1b[0m");
  const path = resolve("tests/data/sensors_10000.sqlite");
  const config: SqliteDbConfig = {
    dbName,
    driver: DbDriver.SQLite,
    path
  };
  StartDielDbServer([config]);
  console.log(`We are starting a server with data found in ${path}.`);
}

function runWithSqliteMultiple(i: number) {
  console.log("\x1b[43m", `Connecting to Sqlite.`, "\x1b[0m");
  const path = resolve(`tests/data/remote_db${i}.sqlite`);
  const config: SqliteDbConfig = {
    dbName: `remote_db${i}`,
    driver: DbDriver.SQLite,
    path
  };
  StartDielDbServer([config]);
  console.log(`We are starting a server with data found in ${path}.`);
}
const whichSqlite:number = parseInt(process.argv[2]);
if (whichSqlite) {
  runWithSqliteMultiple(whichSqlite);
} else {
  runWithSqlite();
}