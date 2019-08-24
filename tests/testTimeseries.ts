import { resolve } from "path";
import { StartDielDbServer, DbDriver } from "../src";

import { PostgresDbConfig, SqliteDbConfig } from "../src/types";

const dbName = "sensors";

function runWithPostgres() {

  const postgresDbConfig: PostgresDbConfig = {
    dbName, // yifan's local test, hacky
    driver: DbDriver.Postgres
  };
  StartDielDbServer([postgresDbConfig]);
}

function runWithSqlite() {
  const path = resolve("tests/data/sensors_10000.sqlite");
  const config: SqliteDbConfig = {
    dbName,
    driver: DbDriver.SQLite,
    path
  };
  StartDielDbServer([config]);
  console.log(`We are starting a server with data found in ${path}.`);
}

runWithSqlite();