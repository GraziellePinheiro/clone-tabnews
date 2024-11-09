import database from "infra/database.js";
import { version } from "react";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query(" SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionCount = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionCountValue =
    databaseMaxConnectionCount.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedconnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const databaseOpenedconnectionsValue =
    databaseOpenedconnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionCountValue),
        opened_connections: databaseOpenedconnectionsValue,
      },
    },
  });
}

export default status;
