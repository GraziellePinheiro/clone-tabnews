import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnetionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnetionsValue =
    databaseMaxConnetionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenConnectionsValue =
    databaseOpenConnectionsResult.rows[0].count;
  //   "SELECT COUNT(*) AS opened_connections FROM pg_stat_activity WHERE datname = current_database();",
  // );
  //
  //   databaseOpenConnectionsResult.rows[0].opened_connections;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(databaseMaxConnetionsValue),
        opened_connections: parseInt(databaseOpenConnectionsValue),
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
