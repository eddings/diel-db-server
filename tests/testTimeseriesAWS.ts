import { StartDielDbServer, DbDriver } from "../src";
import { PostgresDbConfig } from "../src/types";

const dbName = "sensors";
const userName = "diel";

function runWithPostgresRDS() {
  console.log("\x1b[43m", `Connecting to Postgres RDS. dbName: ${dbName} user: ${userName}`, "\x1b[0m");
  const password:string = process.argv[2];
  const postgresDbConfig: PostgresDbConfig = {
    dbName, // yifan's local test, hacky
    driver: DbDriver.Postgres,
    user: userName,
    host: "database-1.cop41batycrj.us-west-1.rds.amazonaws.com",
    port: 5431,
    password
  };
  StartDielDbServer([postgresDbConfig]);
}

runWithPostgresRDS();